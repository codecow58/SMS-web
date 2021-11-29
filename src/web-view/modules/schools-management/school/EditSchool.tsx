import {
  ChoiceGroup,
  Icon,
  MessageBar,
  MessageBarType,
  PrimaryButton,
  Separator,
  Stack,
  TextField,
} from "@fluentui/react";
import { useBoolean, useSetTimeout } from "@fluentui/react-hooks";
import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../../../../context/auth/userContext";
import { db } from "../../../../firebase";
import Layout from "../../common/layout";
import {  doc, getDoc, updateDoc } from "firebase/firestore";
import Loading from "../../common/loading";

const iconStyles = {
  root: {
    fontSize: "24px",
    height: "24px",
    width: "24px",
  },
};

const columnProps = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};

const rowProps = {
  tokens: { childrenGap: 130 },
};

const options = [
  { key: "active", text: "Active", iconProps: { iconName: "Emoji" } },
  {
    key: "inactive",
    text: "Inactive",
    iconProps: { iconName: "IncidentTriangle" },
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { useState } = React;

  const [showMessageBar, { toggle: toggleShowMessage }] = useBoolean(false);
  const [showSuccessMessage, { toggle: toggleShowSuccessMessage }] =
    useBoolean(false);

  const [schoolName, setSchoolName] = useState("" as any);
  const [phoneNumber, setPhoneNumber] = useState(null as any);
  const [email, setEmail] = useState("" as any);
  const [address, setAddress] = useState("" as any);
  const [city, setCity] = useState("" as any);
  const [pinCode, setPinCode] = useState(null as any);
  const [state, setState] = useState("" as any);
  const [country, setCountry] = useState("" as any);
  const [status, setStatus] = useState(true);
 
  const [loading, setLoading] = useState(false);

  const { setTimeout , clearTimeout} = useSetTimeout();

  const { docId } = useParams();
  
  React.useEffect(()=>{
    setLoading(true);
    const id = setTimeout(async () => {
        try {
           const docRef = doc(db, "schools", `${docId}`);
           const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                debugger
                setSchoolName(data.schoolName);
                setPhoneNumber(data.phoneNumber);
                setEmail(data.email);
                setAddress(data.address);
                setCity(data.city);
                setPinCode(data.pinCode);
                setState(data.state);
                setCountry(data.country);
                setStatus(data.status);
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
        } catch (error) {
            debugger
        }finally{
            setLoading(false)
        }
    },1000);

    return () => clearTimeout(id)
  },[]);

  return (
    <Layout>
      {loading && <Loading />}
      <Stack horizontalAlign="center">
        <h1>Edit School</h1>
      </Stack>
      <Separator>
        <Icon iconName="Clock" styles={iconStyles} />
      </Separator>
      <Stack horizontalAlign="end">
        <PrimaryButton
          text="View Schools"
          iconProps={{ iconName: "View" }}
          onClick={() => navigate("/schools-management/school")}
        />
      </Stack>
      <Stack horizontalAlign="center">
        {showMessageBar && (
          <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}
            onDismiss={toggleShowMessage}
            dismissButtonAriaLabel="Close"
            styles={{ root: { maxWidth: "30vw" } }}
          >
            All Fields are required.
          </MessageBar>
        )}

        {showSuccessMessage && (
          <MessageBar
            messageBarType={MessageBarType.success}
            isMultiline={false}
            onDismiss={toggleShowSuccessMessage}
            dismissButtonAriaLabel="Close"
            styles={{ root: { maxWidth: "30vw" } }}
          >
            successfully created.
          </MessageBar>
        )}
      </Stack>
      <Stack horizontal horizontalAlign="center" {...rowProps}>
        <Stack {...columnProps}>
          <TextField
            label="School Name :"
            required
            onChange={(_, v) => setSchoolName(v)}
            value={schoolName}
          />
          <TextField
            label="Phone Number :"
            placeholder="+91 9876543210"
            type="number"
            required
            onChange={(_, v) => setPhoneNumber(v)}
            value={phoneNumber}
          />
          <TextField
            label="Email :"
            type="email"
            placeholder="test@test.com"
            required
            onChange={(_, v) => setEmail(v)}
            value={email}
          />
          <TextField
            label="Address :"
            placeholder="No: 123 main street,"
            multiline
            autoAdjustHeight
            required
            onChange={(_, v) => setAddress(v)}
            value={address}
          />
          <TextField
            label="City :"
            placeholder="Chennai"
            required
            onChange={(_, v) => setCity(v)}
            value={city}
          />
          <TextField
            label="Pin Code:"
            placeholder="600001"
            type="number"
            required
            onChange={(_, v) => setPinCode(v)}
            value={pinCode}
          />
        </Stack>
        <Stack {...columnProps}>
          <TextField
            label="State"
            placeholder="Tamil Nadu"
            required
            onChange={(_, v) => setState(v)}
            value={state}
          />
          <TextField
            label="Country"
            placeholder="India"
            required
            onChange={(_, v) => setCountry(v)}
            value={country}
          />
          <ChoiceGroup
            label="Status"
            defaultSelectedKey="active"
            options={options}
            required
            onChange={(_, { key }: any) => {
              key === "active" ? setStatus(true) : setStatus(false);
            }}
            value={status ? "active" : "inactive"}
          />
        </Stack>
      </Stack>
      <br />
      <Stack horizontalAlign="center">
        <PrimaryButton
          text="Update Shool"
          iconProps={{ iconName: "Upload" }}
          onClick={(_) => {
            if (
              schoolName === "" ||
              email === "" ||
              phoneNumber === null ||
              address === "" ||
              city === "" ||
              state === "" ||
              country === "" ||
              pinCode === null
            ) {
              toggleShowMessage();
            } else {
              const updateSchool = async () => {
                try {

                   const docRef = doc(db, "schools", `${docId}`);
                  await updateDoc(docRef, {
                    schoolName,
                    email,
                    phoneNumber,
                    address,
                    city,
                    pinCode,
                    state,
                    status,
                    country,
                    userID: user.uid,
                    modifiedAt: new Date(),
                  });
                  toggleShowSuccessMessage();
                } catch (error) {
                  console.log(error);
                }
              };
              updateSchool();
            }
          }}
        />
      </Stack>
    </Layout>
  );
};
