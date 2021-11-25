import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from '../auth';
import GoBack from '../common/goback';
import RequireAuth from './RequiredAuth';
import { UserContextProvider } from '../../context';

import Dashboard from "../dashboard";
import ProfileSettings from '../profile-settings';
import StudentManagement from '../student-management';
import EmployeeManagement, { CreateEmployeeRole } from '../employee-management';

const RoutesRoot: React.FunctionComponent = () => {
    return (
      <BrowserRouter>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path="profile-settings"
              element={
                <RequireAuth>
                  <ProfileSettings />
                </RequireAuth>
              }
            />
            <Route
              path="student-management"
              element={
                <RequireAuth>
                  <StudentManagement />
                </RequireAuth>
              }
            />
            <Route
              path="employee-management"
              element={
                <RequireAuth>
                  <EmployeeManagement />
                </RequireAuth>
              }
            />
            <Route
              path="create-employee-role"
              element={
                <RequireAuth>
                  <CreateEmployeeRole />
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