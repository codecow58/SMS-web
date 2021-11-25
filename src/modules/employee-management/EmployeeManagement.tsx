import * as React from 'react';
import Layout from '../common/layout';
import { Stack } from '@fluentui/react';
import Sidebar from '../common/sidebar';

const EmployeeManagement: React.FunctionComponent = () => {

    return (
      <Layout>
        <Stack horizontal >
          <Sidebar />
        </Stack>
      </Layout>
    );
}


export default EmployeeManagement;