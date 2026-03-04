import React from "react";
import { Typography, Box } from "@mui/material";
import { Grid } from "@mui/system";
import Appbar from "./Appbar";
import "../css/Component.css";

const Home = () => {
  return (
    <Box className="about-section">
      <Appbar />
      <Box className="bottom-left-wrapper">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box className="about-grid">
              <div className="about-text">
                <Typography variant="h4" fontWeight="bold">
                  <span style={{ fontFamily: "Georgia, serif" }}>
                    Hello and welcome to twinker space
                  </span>
                </Typography>
                <br />
                <Typography variant="body1">
                  Need a multilingual website? We develop and optimize websites
                  in Chinese, Korean, and English.
                  <br />
                  Let’s bring your ideas to life!
                </Typography>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
