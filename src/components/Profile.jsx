import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Profile = () => {
  const { profile } = useSelector((state) => state.user);

  return (
    <Container>
      {profile && (
        <Box>
          {Object.entries(profile).map(([key, value]) => (
            <h2 key={key}>
              {key} : {value}
            </h2>
          ))}
        </Box>
      )}
      <Link to="/">
        <Button variant="contained">Back to Home</Button>
      </Link>
    </Container>
  );
};

export default Profile;
