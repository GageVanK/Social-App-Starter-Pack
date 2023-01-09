import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  createStyles,
} from "@mantine/core";
import {
  IconBellRinging,
  IconSettings,
  IconReceipt2,
  IconHome2,
  IconUser,
  IconDeviceDesktopAnalytics,
  IconMessages,
} from "@tabler/icons";
import MantineHeader from "./Components/MantineHeader";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.fn.variant({
          variant: "light",
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: "light",
            color: theme.primaryColor,
          }).color,
        },
      },
    },
  };
});

const data = [
  { link: "/", label: "Home", icon: IconHome2 },
  { link: "/profile", label: "Profile", icon: IconUser },
  { link: "/discover", label: "Discover", icon: IconDeviceDesktopAnalytics },
  { link: "/messages", label: "Messages", icon: IconMessages },
  { link: "/notifications", label: "Notifications", icon: IconBellRinging },
  { link: "/wallet", label: "Wallet", icon: IconReceipt2 },
  { link: "/", label: "Settings", icon: IconSettings },
];

function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <Link to={item.link} className={classes.link}>
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
      </Link>
    </a>
  ));

  return (
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
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
          >
            <Navbar.Section grow mt="xl">
              {links}
            </Navbar.Section>
          </Navbar>
        }
        aside={
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
              <Text>Application sidebar</Text>
            </Aside>
          </MediaQuery>
        }
        footer={
          <Footer height={60} p="md">
            Application footer
          </Footer>
        }
        header={<MantineHeader />}
      >
        <Routes></Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;
