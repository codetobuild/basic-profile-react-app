import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { WELCOME } from "../constants/user";

const Welcome = () => {
  const [welcome, setWelcome] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  useEffect(() => {
    const welcomeShown = JSON.parse(sessionStorage.getItem(WELCOME));
    if (!welcomeShown) {
      setWelcome(true);
      setTimeout(() => {
        setWelcome(false);
        sessionStorage.setItem(WELCOME, JSON.stringify(true));
      }, 3000);
    }
  }, []);

  return (
    <Container>
      {welcome && userData.isLoggedIn && (
        <Box
          sx={{
            width: "600px",
            height: "100px",
            background: "#00C897",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "50px",
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "10px",
          }}>
          <Typography variant="h3" sx={{ color: "black", textAlign: "center" }}>
            👋 Welcome {userData.profile?.fullName}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Welcome;
