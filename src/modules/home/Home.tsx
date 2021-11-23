import * as React from "react";
import {
  Stack,
  IStackStyles,
  IStackItemStyles,
  IStackTokens,
} from "@fluentui/react/lib/Stack";
import { useRecoilValue } from "recoil";
import { DefaultPalette } from "@fluentui/react/lib/Styling";
import { IconButton } from "@fluentui/react/lib/Button";
import { featureState } from "../../recoil/atoms";
import { useNavigate } from "react-router-dom";
import Layout from "../common/layout";
const stackStyles: IStackStyles = {
  root: {
    padding: 20,
    marginLeft: 70,
    marginTop: 20,
    overflow: "hidden",
  },
};
const stackItemStyles: IStackItemStyles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    flexDirection: "column",
  },
};
const numericalSpacingStackTokens: IStackTokens = {
  childrenGap: 100,
  padding: 10,
};

const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const features = useRecoilValue(featureState);
  return (
    <Layout>
      <Stack
        horizontal
        styles={stackStyles}
        tokens={numericalSpacingStackTokens}
        wrap={true}
      >
        {features.map(({ name, iconName, link }, i) => {
          return (
            <Stack.Item
              align="center"
              styles={stackItemStyles}
              key={i}
              onClick={() => navigate(link)}
            >
              <IconButton
                iconProps={{ iconName, styles: { root: { fontSize: 35 } } }}
                title={name}
                ariaLabel={name}
                onClick={() => navigate(link)}
              />
              <p
                style={{
                  color: DefaultPalette.themePrimary,
                  fontWeight: 500,
                }}
              >
                {name}
              </p>
            </Stack.Item>
          );
        })}
      </Stack>
    </Layout>
  );
};

export default Home;
