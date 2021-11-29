/* eslint-disable no-useless-computed-key */
import {  DefaultButton, DetailsList, DetailsListLayoutMode, Dialog, DialogFooter, DialogType, Icon, IconButton, PrimaryButton, Separator, Stack } from '@fluentui/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../../context/auth/userContext';
import Layout from '../../common/layout';
import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from '../../../../firebase';
import Loading from '../../common/loading';
import { useBoolean, useSetTimeout } from '@fluentui/react-hooks';


const iconStyles = {
  root: {
    fontSize: "24px",
    height: "24px",
    width: "24px",
  },
};

const modelProps = {
  isBlocking: true,
  styles: { main: { maxWidth: 450 } },
};
const dialogContentProps = {
  type: DialogType.largeHeader,
  title: "Delete School",
  subText:
    "Are you sure, you want to delete this school",
};

const School : React.FunctionComponent = ()=>{
    const {user} = useUserContext();
    const navigate = useNavigate();
    
    const [detailsListItems, setDetailsListItems] = React.useState([] as any);
    const [loading,setLoading] = React.useState(()=>false);
    const [error, setError] = React.useState(null as any);
    const { setTimeout, clearTimeout } = useSetTimeout();
    const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
    const [selectedSchoolForDelete, setSelectedSchoolForDelete] = React.useState("")

    React.useEffect(()=>{
     
      setLoading(true);
       const id = setTimeout(() => {
         try {
           const q = query(
             collection(db, "schools"),
             where("userID", "==", user.uid)
           );
           const getSchools = async () => {
             const querySnapshot = await getDocs(q);

             const qData: any[] = [];
             querySnapshot.forEach((doc: any) => {
               // doc.data() is never undefined for query doc snapshots

               const data = doc.data();
               const detailsListObj = {
                 No: doc.id,
                 ["School Name"]: data.schoolName,
                 Email: data.email,
                 ["Phone Number"]: data.phoneNumber,
                 Address: data.address,
                 City: data.city,
                 State: data.state,
                 Country: data.country,
                 Status: data.status,
                 CreatedAt: data.createdAt.toDate().toDateString(),
                 ModifiedAt: data.modifiedAt.toDate().toDateString(),
                 Edit: "",
                 Delete: "",
               };

               qData.push(detailsListObj);
             });

             setDetailsListItems(qData);
           };
           getSchools();
         } catch (error) {
           setError(error);
         } finally {
           setLoading(false);
         }
       }, 1000);
        
      return () => clearTimeout(id);
    },[])


    const _renderItemColumn = (item: any, index: any, column: any) => {
      const fieldContent = item[column.fieldName];

      switch (column.key) {
        case "No":
          return <span>{index + 1}</span>;
        case "Edit":
          return (
            <IconButton
              iconProps={{ iconName: "Edit" }}
              onClick={() =>
                navigate(`/schools-management/school/edit/${item["No"]}`)
              }
            />
          );
        case "Status":
          return item.Status ? (
            <b style={{ color: "green" }}>Active</b>
          ) : (
            <b style={{ color: "indianred" }}>InActive</b>
          );
        case "Delete":
          return (
            <>
              <IconButton
                iconProps={{ iconName: "Delete" }}
                onClick={() => {
                  toggleHideDialog();
                  setSelectedSchoolForDelete(item["No"]);
                }}
              />
            </>
          );
        default:
          return <span>{fieldContent}</span>;
      }
    };
    
    return (
      <Layout>
        <Dialog
          hidden={hideDialog}
          onDismiss={toggleHideDialog}
          dialogContentProps={dialogContentProps}
          modalProps={modelProps}
        >
          <DialogFooter>
            <PrimaryButton onClick={async ()=>{

              try {
                
                await deleteDoc(doc(db, "schools", `${selectedSchoolForDelete}`));
              } catch (error) {
                console.log(error);
              }finally{
                setSelectedSchoolForDelete("")
                toggleHideDialog();
                setTimeout(()=>  navigate("/schools-management/school"),500)
               
              }
            }} text="Deleted" />
            <DefaultButton onClick={()=>{
              setSelectedSchoolForDelete("");
              toggleHideDialog();
            }} text="Cancel" />
          </DialogFooter>
        </Dialog>
        <Stack horizontalAlign="center">
          <h1>Schools</h1>
          {loading && <Loading />}
        </Stack>
        <Separator>
          <Icon iconName="Clock" styles={iconStyles} />
        </Separator>

        <Stack horizontalAlign="end">
          <PrimaryButton
            text="Create New School"
            iconProps={{ iconName: "Add" }}
            onClick={() => navigate("/schools-management/school/create")}
          />
        </Stack>

        <Stack horizontal>
          <DetailsList
            items={detailsListItems}
            disableSelectionZone={true}
            onShouldVirtualize={() => true}
            onRenderItemColumn={_renderItemColumn}
            layoutMode={DetailsListLayoutMode.fixedColumns}
          />
        </Stack>
      </Layout>
    );
}

export default School;