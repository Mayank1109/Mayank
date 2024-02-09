import React from "react";
import SideNavigation from "../components/sideNavigation/sideNavigation";

const SettingsPage = () => {
  return (
    <div className="grid_container">
      <div className="grid_menu">
        <SideNavigation />
      </div>
      <div className="grid_main">SettingsPage</div>
    </div>
  );
};

export default SettingsPage;
