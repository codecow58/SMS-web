import React from 'react';
import { ThemeProvider } from '@fluentui/react';
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { RecoilRoot } from 'recoil';
import RoutesRoot from './modules/route';
import {myTheme} from './theme'

initializeIcons();

export const App: React.FunctionComponent = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={myTheme}>
        <RoutesRoot />
      </ThemeProvider>
    </RecoilRoot>
  );
};
