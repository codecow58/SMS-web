import { Dropdown, IDropdownOption, IDropdownStyles, Stack } from '@fluentui/react';
import * as React from 'react';
import Layout from '../../common/layout';
import Sidebar from '../../common/sidebar';
import {
  PrimaryButton,
  IIconProps,
  MessageBar,
  MessageBarType,
} from "@fluentui/react";
import { TextField } from "@fluentui/react/lib/TextField";
const createEmployeeRoleIcon: IIconProps = { iconName: "Add" };


const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};

const roleStatusOptions: IDropdownOption[] = [
  { key: "active", text: "Active" },
  { key: "inactive", text: "Inactive" },
];

const roleAccessOptions: IDropdownOption[] = [
  { key: "admin", text: "Admin" },
  { key: "super-admin", text: "Super Admin" },
  { key: "user", text: "User" },
];

const CreateEmployeeRole: React.FunctionComponent = () => {

    const {useState} = React;
    const [roleName, setRoleName ] = useState("");
    const [roleStatus, setRoleStatus] = useState("");
    const [roleAccess, setRoleAccess] = useState("");
    const [showMessageBar, setShowMessageBar] = React.useState(false);
    
    const closeMessageBar = () => setShowMessageBar(false);
    const onSubmit = (ev: any) => {
      if (roleName !== "" || roleAccess !== "" || roleStatus !== "") {
        setShowMessageBar(false);
      } else {
        setShowMessageBar(true);
      }
    };
    return (
      <Layout>
        <Stack horizontal>
          <Stack>
            <Sidebar />
          </Stack>
          <Stack>
            <div>
              {showMessageBar && (
                <MessageBar
                  messageBarType={MessageBarType.error}
                  isMultiline={false}
                  onDismiss={() => closeMessageBar()}
                  dismissButtonAriaLabel="Close"
                >
                  Please fill all required fields
                </MessageBar>
              )}
              <h3>Create Employee Role</h3>
              <TextField
                label="Create Employee Role Name"
                onChange={(e: any) => setRoleName(e.target.value)}
                required
              />
              <Dropdown
                placeholder="Select an option"
                label="Employee Role Status"
                options={roleStatusOptions}
                styles={dropdownStyles}
                onChange={({ text }: any) => setRoleStatus(text)}
                required
              />

              <Dropdown
                placeholder="Select an option"
                label="Empolyee Role Access"
                options={roleAccessOptions}
                styles={dropdownStyles}
                onChange={({ text }: any) => setRoleAccess(text)}
                required
              />

              <br />
              <PrimaryButton
                text="Create Employee Role"
                type="submit"
                iconProps={createEmployeeRoleIcon}
                onClick={onSubmit}
              />
            </div>
          </Stack>
        </Stack>
      </Layout>
    );
}   


export default CreateEmployeeRole;