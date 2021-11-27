import * as React from "react";
import {
  IPersonaSharedProps,
  IPersonaStyles,
  Persona,
  PersonaSize,
} from "@fluentui/react/lib/Persona";
import { Stack } from "@fluentui/react/lib/Stack";
import { IconButton } from "@fluentui/react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../../context/auth/userContext";

const personaStyles: Partial<IPersonaStyles> = {
  root: { margin: "-40 0 10px 0" },
};

const Header: React.FunctionComponent = () => {


  const { user , logOutUser } = useUserContext();


  const { displayName, photoURL } = user;

  const examplePersona: IPersonaSharedProps = {
    imageUrl: photoURL,
    imageInitials: displayName ? displayName.charAt(0) : "S",
    text: displayName,
  };
  const navigate = useNavigate();
  return (
    <Stack horizontal >
      <Persona
        {...examplePersona}
        size={PersonaSize.size32}
        styles={personaStyles}
        imageAlt="Surendar"
      />

      <IconButton
        iconProps={{
          iconName: "Settings",
          styles: { root: { fontSize: 18 } },
        }}
        title="Settings"
        ariaLabel={"Settings"}
        menuProps={{
          items: [
            {
              key: "logout",
              text: "Logout",
              onClick: () => {
                logOutUser()
              },
              iconProps: { iconName: "Lock" },
            },
            {
              key: "profile",
              text: "Profile Settings",
              onClick: () => {
                navigate("/profile-settings");
              },
              iconProps: { iconName: "PlayerSettings" },
            },
          ],
        }}
      />
    </Stack>
  );
};


export default Header;