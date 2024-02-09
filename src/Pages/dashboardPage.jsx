import "./dashboardPage.css";
import Dashboard from "../components/dashboard/dashboard";
import SideNavigation from "../components/sideNavigation/sideNavigation";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DashboardPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  return (
    <div className="grid_container">
      <div className="grid_menu">
        <SideNavigation />
      </div>
      <div className="grid_main">
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardPage;
