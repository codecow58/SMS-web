import * as React from "react";
import { useNavigate } from "react-router-dom";

import { IconButton } from "@fluentui/react";

const GoBack: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <IconButton
      onClick={() => navigate("/dashboard")}
      iconProps={{
        iconName: "Street",
        styles: { root: { fontSize: 38} },
      }}

      style={{margin:20}}
    />
    
  );
};

export default GoBack;
