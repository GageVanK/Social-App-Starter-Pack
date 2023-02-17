import MantineShell from "./Components/MantineShell";
import { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";
import { BrowserRouter } from "react-router-dom";

const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: "306f0789-aff0-4ac5-890f-eac0dccf3bcc",
  }),
});

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <LivepeerConfig client={livepeerClient}>
      <BrowserRouter>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            theme={{ colorScheme }}
            withGlobalStyles
            withNormalizeCSS
          >
            <MantineShell></MantineShell>
          </MantineProvider>
        </ColorSchemeProvider>
      </BrowserRouter>
    </LivepeerConfig>
  );
}

export default App;
