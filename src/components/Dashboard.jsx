import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const IMAGES = [...Array(20).keys()];

const Dashboard = () => {
  return (
    <Container sx={{ marginTop: 5 }}>
      <Grid container spacing={5}>
        {IMAGES.map((item, index) => (
          <Grid item xs={3} key={item}>
            <Box>
              <img
                src="https://picsum.photos/200"
                alt="gallary"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "cover",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;
