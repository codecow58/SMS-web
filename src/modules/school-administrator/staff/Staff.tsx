import {  PrimaryButton, Stack } from '@fluentui/react';
import * as React from 'react';
import Layout from '../../common/layout';


const Staff: React.FunctionComponent = () => {
    return (
      <Layout>
        <Stack horizontalAlign="center">
          <h1>Staff</h1>
        </Stack>
        <Stack horizontalAlign="end">
          <PrimaryButton text="Create New Staff" iconProps={{ iconName: "Add" }} />
        </Stack>
      </Layout>
    );
}

export default Staff;