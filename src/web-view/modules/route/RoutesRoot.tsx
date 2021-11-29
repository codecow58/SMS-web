import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from '../auth';
import GoBack from '../common/goback';
import RequireAuth from './RequiredAuth';

import {
  Classes,
  CreateSchool,
  Dashboard,
  School,
  EditSchool,
} from "../schools-management";
import ProfileSettings from '../profile-settings';
import { CreateStaff, Roles, Staff } from '../school-administrator';
import UserContextProvider from '../../../context/auth/userContext';
import { SchoolDashboard } from '../school-management';
import Sessions from '../schools-management/sessions/Sessions';


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
              path="school-administrator/roles"
              element={
                <RequireAuth>
                  <Roles />
                </RequireAuth>
              }
            />
            <Route
              path="school-administrator/staff"
              element={
                <RequireAuth>
                  <Staff />
                </RequireAuth>
              }
            />
            <Route
              path="school-administrator/staff/create"
              element={
                <RequireAuth>
                  <CreateStaff />
                </RequireAuth>
              }
            />
            <Route
              path="schools-management/school"
              element={
                <RequireAuth>
                  <School />
                </RequireAuth>
              }
            />
            <Route
              path="schools-management/school/create"
              element={
                <RequireAuth>
                  <CreateSchool />
                </RequireAuth>
              }
            />
            <Route
              path="schools-management/school/edit/:docId"
              element={
                <RequireAuth>
                  <EditSchool />
                </RequireAuth>
              }
            />
            <Route
              path="schools-management/classes"
              element={
                <RequireAuth>
                  <Classes />
                </RequireAuth>
              }
            />
            <Route
              path="school-management/dashboard/:id"
              element={
                <RequireAuth>
                  <SchoolDashboard />
                </RequireAuth>
              }
            />
            <Route
              path="schools-management/sessions"
              element={
                <RequireAuth>
                  <Sessions />
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