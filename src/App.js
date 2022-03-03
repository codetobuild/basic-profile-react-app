import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/stores/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import { useDispatch } from "react-redux";
import { loginUser } from "./redux/actions/userActions";
import UpdatePage from "./pages/UpdatePage";
import ProfilePage from "./pages/ProfilePage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <AppWrapper>
            <CssBaseline />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfilePage />} />

              <Route path="/update/:id" element={<UpdatePage />} />
            </Routes>
          </AppWrapper>
        </Provider>
      </BrowserRouter>
    </>
  );
};

function AppWrapper(props) {
  const dispatch = useDispatch();
  dispatch(loginUser());
  return props.children;
}

export default App;
