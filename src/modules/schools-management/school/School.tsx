/* eslint-disable no-useless-computed-key */
import { CheckboxVisibility, ConstrainMode, DetailsList, DetailsListLayoutMode, Icon, IconButton, PrimaryButton, Separator, Stack } from '@fluentui/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../context/auth/userContext';
import Layout from '../../common/layout';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../../firebase';


const iconStyles = {
  root: {
    fontSize: "24px",
    height: "24px",
    width: "24px",
  },
};



const School : React.FunctionComponent = ()=>{
    const {user} = useUserContext();
    const navigate = useNavigate();

    const [detailsListItems, setDetailsListItems] = React.useState([] as any);
    React.useEffect(()=>{
        const q = query(collection(db, "schools"), where("userID", "==", user.uid));
        const getSchools = async () => {
          const querySnapshot = await getDocs(q);

          const qData:any[] = [];
          querySnapshot.forEach((doc: any) => {
            // doc.data() is never undefined for query doc snapshots

            const data = doc.data();
            const detailsListObj = {
              No: doc.id,
              ["School Name"]:data.schoolName,
              Email: data.email,
              ["Phone Number"]:data.phoneNumber,
              Address: data.address,
              City:data.city,
              State:data.state,
              Country: data.country,
              Status:data.status,
              CreatedAt: data.createdAt.toDate().toDateString(),
              Edit: "",
              Delete: "",
            };

            qData.push(detailsListObj)
          });

          setDetailsListItems(qData);
        }
        getSchools();
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
            <IconButton iconProps={{ iconName: "Delete" }} />
          );
        default:
          return <span>{fieldContent}</span>;
      }
    };
    
    return (
      <Layout>
        <Stack horizontalAlign="center">
          <h1>Schools</h1>
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