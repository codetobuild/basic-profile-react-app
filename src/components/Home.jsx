import React from "react";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <>
      <Welcome />
      <Navbar />
      <Dashboard />
    </>
  );
};

export default Home;
