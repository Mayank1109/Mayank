import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/loginPage";
import DashBoardPage from "./Pages/dashboardPage";
import BinPage from "./Pages/binPage";
import RolePage from "./Pages/rolePage";
import ProfilePage from "./Pages/profilePage";
const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/dashboard", element: <DashBoardPage /> },
  { path: "/bin", element: <BinPage /> },
  { path: "/roles", element: <RolePage /> },
  { path: "/profile", element: <ProfilePage /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
