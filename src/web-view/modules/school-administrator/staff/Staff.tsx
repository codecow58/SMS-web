import {  Icon, PrimaryButton, Separator, Stack } from '@fluentui/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../common/layout';


const iconStyles = {
  root: {
    fontSize: "24px",
    height: "24px",
    width: "24px",
  },
};

const Staff: React.FunctionComponent = () => {

    const navigate = useNavigate();
    return (
      <Layout>
        <Stack horizontalAlign="center">
          <h1>Staff</h1>
        </Stack>
        <Separator>
          <Icon iconName="Clock" styles={iconStyles} />
        </Separator>
        <Stack horizontalAlign="end">
          <PrimaryButton
            text="Create New Staff"
            iconProps={{ iconName: "Add" }}
            onClick={() => navigate("/school-administrator/staff/create")}
          />
        </Stack>
      </Layout>
    );
}

export default Staff;