import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logoutUser, deleteAccount } from "../redux/actions/userActions";

const ProfileMenuItem = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  useEffect(() => {
  }, [userData]);

  const handleLogout = (event) => {
    dispatch(logoutUser());
  };
  const handleUpdateAccount = (event) => {
    // dispatch();
  };
  const handleDeleteAccount = (event) => {
    dispatch(deleteAccount());
  };
  return (
    <>
      {userData.isLoggedIn && (
        <NavLink to="/profile">
          <MenuItem>
            <Avatar /> My Profile
          </MenuItem>
        </NavLink>
      )}
      {!userData.isLoggedIn && (
        <NavLink to="/register">
          <MenuItem>
            <Avatar /> Register
          </MenuItem>
        </NavLink>
      )}
      {!userData.isLoggedIn && (
        <NavLink to="/login">
          <MenuItem>
            <Avatar /> Login
          </MenuItem>
        </NavLink>
      )}

      {userData.isLoggedIn && (
        <MenuItem onClick={handleDeleteAccount}>
          <Avatar /> Delete Account
        </MenuItem>
      )}
      {userData.isLoggedIn && (
        <NavLink to={`/update/${userData.profile.id}`}>
          <MenuItem onClick={handleUpdateAccount}>
            <Avatar /> Update Profile
          </MenuItem>
        </NavLink>
      )}

      <Divider />
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      {userData.isLoggedIn && (
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      )}
    </>
  );
};

export default ProfileMenuItem;
