import React, { useEffect } from "react";
import RecycleBin from "../components/bin/recycleBin";
import SideNavigation from "../components/sideNavigation/sideNavigation";
import Role from "../components/role/role";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Profile from "../components/personalProfessional/profile";
const ProfilePage = () => {
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
        <Profile />
      </div>
    </div>
  );
};

export default ProfilePage;
