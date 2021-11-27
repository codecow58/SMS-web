import { CheckboxVisibility, DefaultButton, DetailsList, Dialog, DialogFooter, DialogType, Dropdown, IconButton, PrimaryButton, Stack, TextField } from '@fluentui/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../common/layout';
import { collection, getDocs, updateDoc,doc } from "firebase/firestore"; 
import { db } from '../../../../firebase';

import {  useBoolean } from "@fluentui/react-hooks";
import Loading from '../../common/loading';

const Roles: React.FunctionComponent = () => {

    const [roles , setRoles] = React.useState([]);
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = React.useState({} as any);
    const [loading, {toggle:toggleLoading}] = useBoolean(false);

    const [roleName , setRoleName] = React.useState("");
    const [roleStatus, setRoleStatus] = React.useState(false);

   const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
   const dialogContentProps = {
     type: DialogType.normal,
     title: "Edit Role",
     closeButtonAriaLabel: "Close",
   };

    React.useEffect(() => {
      const fetchRoles = async () => {
        try {
          toggleLoading();
          const dataArray = [] as any;
          const querySnapshot = (await getDocs(collection(db, "roles"))) as any;

          querySnapshot.forEach((doc: any) => {
            const data = {
              No: doc.id,
              "Role Name": doc.data().roleName,
              Status: doc.data().status,
              Edit: "",
              Delete: "",
            };
            dataArray.push(data);
          });
          setRoles(dataArray);
        } catch (error) {
          console.log(error);
        }
      };
      fetchRoles();
      setTimeout(toggleLoading, 1000)
    }, []);


    const _renderItemColumn = (
      item:any,
      index:any,
      column:any
    ) => {
      const fieldContent = item[
        column.fieldName
      ] 

      switch (column.key) {
        case 'No':
          return <span>{index + 1}</span>
        case "Edit":
          return <IconButton iconProps={{iconName:'Edit'}} disabled={true} onClick={()=>{
            toggleHideDialog();
            setSelectedItem(item);
            setRoleName(item['Role Name']);
            setRoleStatus(item["Status"]);
          }} />;
        case "Status":
          return item.Status ? (
            <b style={{ color: "green" }}>Active</b>
          ) : (
            <b style={{ color: "indianred" }}>InActive</b>
          );
        case "Delete":
          return (
            <IconButton disabled={true} iconProps={{ iconName: "Delete" }} />
          );
        default:
          return <span>{fieldContent}</span>;
      }
    };

    return (
      <Layout>
        <Stack horizontalAlign="center">
          <h1>Roles</h1>
        </Stack>
        {loading && <Loading />}
        <br />

        <Stack>
          <Dialog
            hidden={hideDialog}
            onDismiss={() => {
              toggleHideDialog();
              setSelectedItem({});
            }}
            dialogContentProps={dialogContentProps}
          >
            <TextField
              label="Role Name"
              defaultValue={selectedItem["Role Name"]}
              onChange={(_, v) => setRoleName(v as any)}
            />
            <Dropdown
              label="Role Status"
              options={[
                { key: "active", text: "Active" },
                { key: "inactive", text: "Inactive" },
              ]}
              defaultSelectedKey={
                selectedItem["Status"] === true ? "active" : "inactive"
              }
              onChange={(_, { key }: any) => {
                debugger;
                key === "active" ? setRoleStatus(true) : setRoleStatus(false);
              }}
            />
            <DialogFooter>
              <PrimaryButton
                onClick={() => {
                  const updateRole = async () => {
                    const roleRef = doc(db, "roles", selectedItem["No"]);
                    try {
                      await updateDoc(roleRef, {
                        roleName,
                        status: roleStatus,
                      });
                    } catch (error) {
                      console.log(error);
                    }
                  };
                  updateRole();
                  toggleHideDialog();
                  navigate("/");
                  setTimeout(() => navigate("/school-administrator/roles"), 0);
                }}
                text="Update"
              />
              <DefaultButton onClick={toggleHideDialog} text="Cancel" />
            </DialogFooter>
          </Dialog>
          <DetailsList
            styles={{ root: { overflow: "scroll", maxHeight: "80vh" } }}
            items={roles}
            disableSelectionZone={true}
            onShouldVirtualize={() => true}
            enterModalSelectionOnTouch={true}
            onRenderItemColumn={_renderItemColumn}
            checkboxVisibility={CheckboxVisibility.hidden}
          />
        </Stack>
      </Layout>
    );
}

export default Roles;

