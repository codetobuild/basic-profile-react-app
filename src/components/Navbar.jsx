import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileMenuItem from "./ProfileMenuItem";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    // console.log("redux user data", userData);
  }, [userData]);

  return (
    <Container maxWidth="fluid" sx={{ backgroundColor: "#14213d" }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "70px",
        }}>
        <Box>
          <Typography variant="h4" component="h1" sx={{ color: "white" }}>
            Logo
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
            <NavLink to="/products">
              <Typography
                variant="h6"
                component="h3"
                sx={{ minWidth: 100, color: "white" }}>
                Products
              </Typography>
            </NavLink>
            <NavLink to="/Services">
              <Typography
                variant="h6"
                component="h3"
                sx={{ minWidth: 100, color: "white" }}>
                Services
              </Typography>
            </NavLink>

            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}>
                <Avatar fontSize="large" src="https://picsum.photos/200" />
              </IconButton>
            </Tooltip>
            <ProfileMenu />
          </Box>
        </Box>
      </Container>
    </Container>
  );

  function ProfileMenu() {
    return (
      <>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
          <ProfileMenuItem />
        </Menu>
      </>
    );
  }
};

export default Navbar;
