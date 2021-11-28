import * as React from "react";
import {
  Icon,
  Separator,
  Stack,
  TextField,
  ChoiceGroup,
} from "@fluentui/react";
import Layout from '../../common/layout'

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
  { key: "A", text: "Option A" },
  { key: "B", text: "Option B" },
  { key: "D", text: "Option D" },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
      <Layout>
        <Stack horizontalAlign="center">
          <h1>Create Staff</h1>
        </Stack>
        <Separator>
          <Icon iconName="Clock" styles={iconStyles} />
        </Separator>
        <Stack horizontal horizontalAlign="center" {...rowProps}>
          <Stack {...columnProps}>
            <TextField label="Name" required/>
            <TextField label="Name" required/>
            <TextField label="Name" required/>
            <ChoiceGroup
              defaultSelectedKey="B"
              options={options}
              onChange={_onChange}
              label="Pick one"
              required={true}
            />
          </Stack>
          <Stack {...columnProps}>
            <TextField label="Name" required/>
            <TextField label="Name" required/>
            <TextField label="Name" required/>
          </Stack>
        </Stack>
      </Layout>
    );
}


function _onChange(
  _:any,
  option:any 
) {
  console.dir(option);
}
