import React from "react";
import { Stack } from "@fluentui/react/lib/Stack";
import Header from "../header";
import GoBack from "../goback";
const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: "#edebe9",
      }}
    >
      <Stack horizontal horizontalAlign="start">
        <GoBack />
      </Stack>
      <Stack
        horizontal
        horizontalAlign="end"
        styles={{ root: { marginTop: "-30px" } }}
      >
        <Header />
      </Stack>
      {children}
    </div>
  );
};

export default Layout;
