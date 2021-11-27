import React from 'react';
import { getTheme, Icon, Stack, ThemeProvider } from '@fluentui/react';
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import RoutesRoot from './web-view/modules/route';
import {
  BrowserView,
  MobileView
} from "react-device-detect";
import {myTheme} from './theme'

initializeIcons();

export const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserView>
        <RoutesRoot />
      </BrowserView>
      <MobileView>
        <Stack
          horizontalAlign="center"
          verticalAlign="center"
          styles={{ root: { minHeight: "100vh" } }}
        >
          <Icon
            iconName="ConstructionConeSolid"
            styles={{ root: { fontSize: "20vw" ,color:getTheme().palette.yellowDark} }}
          />
          <br />
          <h3>we are under construction</h3>
        </Stack>
      </MobileView>
    </ThemeProvider>
  );
};
