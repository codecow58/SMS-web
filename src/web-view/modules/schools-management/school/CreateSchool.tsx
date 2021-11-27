import { ChoiceGroup, Icon, MessageBar, MessageBarType, PrimaryButton, Separator, Stack, TextField } from "@fluentui/react";
import { useBoolean } from "@fluentui/react-hooks";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../../context/auth/userContext";
import { db } from "../../../../firebase";
import Layout from "../../common/layout";
import { collection, addDoc } from "firebase/firestore";

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



const CreateSchool: React.FunctionComponent = () => {
    
    const navigate = useNavigate();
    const {user} = useUserContext();
    const {useState} = React;

    const [showMessageBar , {toggle:toggleShowMessage}] = useBoolean(false)
    const [showSuccessMessage, { toggle: toggleShowSuccessMessage }] =
      useBoolean(false);

    const [schoolName , setSchollName] = useState("" as any);
    const [phoneNumber, setPhoneNumber] = useState(null as any);
    const [email, setEmail] = useState("" as any);
    const [address, setAddress] = useState("" as any);
    const [city, setCity] = useState("" as any);
    const [pinCode, setPinCode] = useState(null as any);
    const [state, setState] = useState("" as any);
    const [country, setCountry] = useState("" as any);
    const [status, setStatus] = useState(true);
  
  return (
    <Layout>
      <Stack horizontalAlign="center">
        <h1>Create School</h1>
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
            placeholder="RKMH School"
            required
            onChange={(_, v) => setSchollName(v)}
          />
          <TextField
            label="Phone Number :"
            placeholder="+91 9876543210"
            type="number"
            required
            onChange={(_, v) => setPhoneNumber(v)}
          />
          <TextField
            label="Email :"
            type="email"
            placeholder="test@test.com"
            required
            onChange={(_, v) => setEmail(v)}
          />
          <TextField
            label="Address :"
            placeholder="No: 123 main street,"
            multiline
            autoAdjustHeight
            required
            onChange={(_, v) => setAddress(v)}
          />
          <TextField
            label="City :"
            placeholder="Chennai"
            required
            onChange={(_, v) => setCity(v)}
          />
          <TextField
            label="Pin Code:"
            placeholder="600001"
            type="number"
            required
            onChange={(_, v) => setPinCode(v)}
          />
        </Stack>
        <Stack {...columnProps}>
          <TextField
            label="State"
            placeholder="Tamil Nadu"
            required
            onChange={(_, v) => setState(v)}
          />
          <TextField
            label="Country"
            placeholder="India"
            required
            onChange={(_, v) => setCountry(v)}
          />
          <ChoiceGroup
            label="Status"
            defaultSelectedKey="active"
            options={options}
            required
            onChange={(_, { key }: any) => {
              key === "active" ? setStatus(true) : setStatus(false);
            }}
          />
        </Stack>
      </Stack>
      <br />
      <Stack horizontalAlign="center">
        <PrimaryButton
          text="Create New Shool"
          iconProps={{ iconName: "Add" }}
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

              const addSchool = async () => {
                try {
                   await addDoc(collection(db, "schools"), {
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
                    createdAt: new Date(),
                  });
                  toggleShowSuccessMessage();
                } catch (error) {
                  console.log(error);
                }
              };

              addSchool();
            }
          }}
        />
      </Stack>
    </Layout>
  );
};

export default CreateSchool;
