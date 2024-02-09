import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../ui/home";
import Bin from "../../ui/bin";
import "./sideNavigation.css";
import Settings from "../../ui/settings";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authSlice";
import Community from "../../ui/community";

const SideNavigation = () => {
  const dispatch = useDispatch();
  const authRole = useSelector((state) => state.auth.authRole);

  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
  };

  const [showProfileSubMenu, setShowProfileSubMenu] = useState(false);

  const accessContent = (
    <>
      <li>
        <NavLink to="/bin">
          <button>
            <div className="icon">
              <Bin />
            </div>
            Users
          </button>
        </NavLink>
      </li>

      <li>
        <NavLink to="/roles">
          <button>
            <div className="icon">
              <Settings />
            </div>
            Roles
          </button>
        </NavLink>
      </li>
    </>
  );
  const toggleProfileSubMenu = () => {
    setShowProfileSubMenu(!showProfileSubMenu);
  };

  return (
    <>
      <ul className="navbar__sidebar" id="sideBar">
        <div className="main_icons">
          <h2 className="sidebar_info">Assignment</h2>
        </div>
        <div className="menu_list">
          <li>
            <NavLink to="/dashboard">
              <button>
                <div className="icon">
                  <HomeIcon />
                </div>
                Dashboard
              </button>
            </NavLink>
          </li>

          {authRole === "Admin" && accessContent}
          <li>
            <button onClick={toggleProfileSubMenu}>
              <div className="icon">
                <Community />
              </div>
              Profile
            </button>
            {showProfileSubMenu && (
              <ul className="subMenu">
                <NavLink to="/profile">
                  <li>Personal</li>
                </NavLink>
                <NavLink to="/profile">
                  <li>Professional</li>
                </NavLink>
              </ul>
            )}
          </li>

          <li onClick={logoutHandler}>
            <NavLink to="/login">
              <button>
                <div className="icon">
                  <Settings />
                </div>
                Logout
              </button>
            </NavLink>
          </li>
        </div>
      </ul>
    </>
  );
};

export default SideNavigation;
