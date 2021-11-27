import React from 'react';
import { ThemeProvider } from '@fluentui/react';
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import RoutesRoot from './web-view/modules/route';
import {myTheme} from './theme'

initializeIcons();

export const App: React.FunctionComponent = () => {
  return (
      <ThemeProvider theme={myTheme}>
        <RoutesRoot />
      </ThemeProvider>
  );
};
