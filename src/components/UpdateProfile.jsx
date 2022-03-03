import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Navigate, Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateAccount } from "../redux/actions/userActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const userData = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    country: "",
    address: "",
    company: "",
  });

  const handleUpdate = async (formData) => {
    await dispatch(updateAccount(formData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    handleUpdate({ id: params.id, ...formData })
      .then(() => {
        // navigate("/login");
 
        toast("🦄 Wow so easy!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((e) => console.log(e));
  };
  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    setFormData((prev) => ({ ...prev, ...userData.profile }));
  }, [userData]);

  return (
    <>
      <ToastContainer />
      <Container
        maxWidth="fluid"
        sx={{
          background: "url(https://picsum.photos/200/300)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              width: "700px",
              padding: "30px",
              backgroundColor: "skyblue",
              borderRadius: "10px",
              margin: "20px auto 0",
              boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
            }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ textAlign: "center" }}>
              UPDATE PROFILE
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
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              sx={{ width: "100%", marginBottom: "30px" }}
              name="address"
              value={formData.address}
              onChange={handleFormChange}
            />
            <TextField
              id="outlined-basic"
              label="Country"
              variant="outlined"
              sx={{ width: "100%", marginBottom: "30px" }}
              name="country"
              value={formData.country}
              onChange={handleFormChange}
            />
            <TextField
              id="outlined-basic"
              label="Company"
              variant="outlined"
              sx={{ width: "100%", marginBottom: "30px" }}
              name="company"
              value={formData.company}
              onChange={handleFormChange}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="contained"
                sx={{ width: "200px" }}
                size="large"
                type="submit">
                UPDATE
              </Button>
              <Link to="/">
                <Button
                  variant="contained"
                  sx={{ width: "200px" }}
                  size="large"
                  type="button">
                  CANCEL
                </Button>
              </Link>
            </Box>
          </Box>
        </form>
      </Container>
    </>
  );
};

export default UpdateProfile;
