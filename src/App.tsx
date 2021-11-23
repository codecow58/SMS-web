import React from 'react';

import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { RecoilRoot } from 'recoil';
import RoutesRoot from './modules/route';


initializeIcons();

export const App: React.FunctionComponent = () => {
  return (
    <RecoilRoot>
      <RoutesRoot/>
    </RecoilRoot>
  );
};
