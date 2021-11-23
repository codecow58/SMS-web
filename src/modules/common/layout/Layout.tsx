import React from "react";
import { Stack } from "@fluentui/react/lib/Stack";
import Header from "../header";
import GoBack from "../goback";
const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div>
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
