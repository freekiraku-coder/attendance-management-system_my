import { createBrowserRouter } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import AttendancePage from "../pages/AttendancePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },
  {
    path: "/attendance",
    Component: AttendancePage,
  },
]);