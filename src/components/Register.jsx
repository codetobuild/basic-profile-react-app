import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  registerUser,
  loginUser,
  logoutUser,
  deleteAccount,
} from "../redux/actions/userActions";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const handleRegister = async (formData) => {
    console.log("Register");
    await dispatch(registerUser(formData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    handleRegister(formData)
      .then(() => {
        navigate("/login");
      })
      .catch((e) => console.log(e));
  };
  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (userData.isLoggedIn) {
      navigate("/");
    }
  }, [userData]);
  return (
    <Container sx={{}}>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            width: "500px",
            padding: "30px",
            backgroundColor: "skyblue",
            borderRadius: "10px",
            margin: "50px auto 0",
            boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
          }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ textAlign: "center" }}>
            REGISTER
          </Typography>

          <TextField
            id="outlined-basic"
            label="FullName"
            variant="outlined"
            sx={{ width: "100%", marginBottom: "30px" }}
            name="fullName"
            value={formData.fullName}
            onChange={handleFormChange}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ width: "100%", marginBottom: "30px" }}
            name="email"
            value={formData.email}
            onChange={handleFormChange}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{ width: "100%", marginBottom: "30px" }}
            name="password"
            value={formData.password}
            onChange={handleFormChange}
          />
          <Typography variant="subtitle1" component="h3" gutterBottom sx={{}}>
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
          <Button
            variant="contained"
            sx={{ width: "200px" }}
            size="large"
            type="submit">
            Register
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Register;
