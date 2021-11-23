import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from '../auth';
import GoBack from '../common/goback';
import RequireAuth from './RequiredAuth';
import { UserContextProvider } from '../../context';

import Dashboard from "../dashboard";
import Home from "../home";

const RoutesRoot: React.FunctionComponent = () => {
    return (
      <BrowserRouter>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="home"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route path="*" element={<GoBack />} />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    );
}

export default RoutesRoot;