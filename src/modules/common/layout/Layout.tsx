import React from "react";
import { Stack } from "@fluentui/react/lib/Stack";
import Header from "../header";
import GoBack from "../goback";
import Sidebar from "../sidebar";
import { getTheme } from "@fluentui/react";

const theme = getTheme();
const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#edebe9",
      }}
    >
      <Stack horizontal horizontalAlign="start">
        <GoBack />
      </Stack>
      <Stack
        horizontal
        horizontalAlign="end"
        styles={{ root: { marginTop: "-55px" } }}
      >
        <Header />
      </Stack>
      <Stack horizontal>
        <Sidebar />
        <div
          style={{
            boxShadow: theme.effects.elevation8,
            flexGrow: 2,
            backgroundColor: "white",
            maxWidth: "75vw",
            padding: 20,
          }}
        >
      {children}
        </div>
      </Stack>
    </div>
  );
};

export default Layout;
