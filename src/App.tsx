import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Wallet from "./pages/Wallet";
import Notifications from "./pages/Notifications";
import {
  AppShell,
  useMantineTheme,
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import MantineHeader from "./Components/MantineHeader";
import MantineNavBar from "./Components/MantineNavBar";
import MantineFooter from "./Components/MantineFooter";
import MantineSideBar from "./Components/MantineSideBar";

function App() {
  const theme = useMantineTheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
    
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <BrowserRouter>
          <AppShell
            styles={{
              main: {
                background:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
              },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={<MantineNavBar />}
            aside={<MantineSideBar />}
            footer={<MantineFooter />}
            header={<MantineHeader />}
          >
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </AppShell>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
