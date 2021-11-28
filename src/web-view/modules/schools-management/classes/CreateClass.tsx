import { Icon, PrimaryButton, Separator, Stack } from "@fluentui/react";
import * as React from "react";
import Layout from "../../common/layout";

const iconStyles = {
  root: {
    fontSize: "24px",
    height: "24px",
    width: "24px",
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Layout>
      <Stack horizontalAlign="center">
        <h1>Create Class</h1>
      </Stack>
      <Separator>
        <Icon iconName="Clock" styles={iconStyles} />
      </Separator>
      <Stack horizontalAlign="end">
        <PrimaryButton text="View Class" iconProps={{ iconName: "View" }} />
      </Stack>
    </Layout>
  );
};
