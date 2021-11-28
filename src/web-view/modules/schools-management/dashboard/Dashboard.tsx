import { DocumentCard, DocumentCardDetails, DocumentCardPreview, DocumentCardTitle, DocumentCardType, getTheme, Icon, PrimaryButton, Separator, Stack } from '@fluentui/react';
import { DocumentCardDetailsBase } from '@fluentui/react/lib/components/DocumentCard/DocumentCardDetails.base';
import * as React from 'react';
import { useUserContext } from '../../../../context/auth/userContext';
import { collection, query, where, getDocs } from "firebase/firestore";
import Layout from '../../common/layout';
import { db } from '../../../../firebase';
import { useNavigate } from 'react-router-dom';
import Loading from '../../common/loading';
import { useSetTimeout } from "@fluentui/react-hooks";

const theme = getTheme();
const { palette, fonts } = theme;
const iconStyles = {
  root: {
    fontSize: "24px",
    height: "24px",
    width: "24px",
  },
};

const previewOutlookUsingIcon = {
  previewImages: [
    {
      previewIconProps: {
        iconName: "CityNext",
        styles: {
          root: {
            fontSize: fonts.superLarge.fontSize,
            color: "#8a00d4",
            backgroundColor: palette.neutralLighterAlt,
          },
        },
      },
      width: 144,
    },
  ],
  styles: {
    previewIcon: { backgroundColor: palette.neutralLighterAlt },
  },
  
};


const Dashboard: React.FunctionComponent = () => {
    const { user } = useUserContext();
    const { setTimeout, clearTimeout } = useSetTimeout();

    const navigate = useNavigate()
    const [loading, setLoading]  = React.useState(false)
    const [detailsListItems, setDetailsListItems] = React.useState([] as any);

    React.useEffect(()=>{

      setLoading(true);
      const id = setTimeout(()=>{
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
                 id: doc.id,
                 ...data,
               };

               qData.push(detailsListObj);
             });

             setDetailsListItems(qData);
           };
           getSchools();
         } catch (error) {
         } finally {
           setLoading(false);
         }
      },1000);
       return () => clearTimeout(id);
    },[]);

    return (
      <Layout>
        <Stack
          styles={{ root: { minHeight: "100%" } }}
          horizontalAlign="center"
        >
          {loading && <Loading/>}
          <h1>Dashboard</h1>
          <Separator>
            <Icon iconName="Clock" styles={iconStyles} />
          </Separator>
          <br />
          <Stack horizontal>
            <Stack wrap={true} horizontal tokens={{ childrenGap: 20 }}>
              {detailsListItems.map((item: any, i: any) => {
                return (
                  <DocumentCard
                    aria-label={item.schoolName}
                    type={DocumentCardType.compact}
                    styles={{ root: { width: 600 } }}
                    key={item.id}
                  >
                    <DocumentCardPreview {...previewOutlookUsingIcon} />
                    <DocumentCardDetails>
                      <DocumentCardTitle
                        title={item.schoolName}
                        shouldTruncate
                      />
                      <DocumentCardDetailsBase>
                        <PrimaryButton
                          text="view more"
                          styles={{ root: { marginLeft: 100 } }}
                          onClick={() =>
                            navigate(`/school-management/dashboard/${item.id}`)
                          }
                        />
                      </DocumentCardDetailsBase>
                    </DocumentCardDetails>
                  </DocumentCard>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </Layout>
    );
}

export default Dashboard;