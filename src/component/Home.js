import React from "react";
import "../css/Home.css"; // 스타일 파일을 임포트
import { Typography, Box, Button, Container } from "@mui/material";
import { Grid } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import DeckIcon from "@mui/icons-material/Deck";

const AboutMe = () => {
  const pages = ["Home", "Intro", "Skills", "Blog", "Contact"];

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box className="about-section">
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#000000",
          borderRadius: 3,
          height: 55,
          justifyContent: "center",
          alignContent: "center",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "90%", sm: "60%" },
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
              logo
            ></Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => {}}
                color="white"
              >
                {/* <MenuIcon /> */}
                <DeckIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={false}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => console.log("94")}>
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              twinker sapce
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => scrollToSection(page)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Grid container space={3}>
        <Grid item size={4} className="about-grid">
          <div className="about-text">
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ marginTop: "10px" }}
            >
              <span style={{ fontFamily: "Georgia, serif" }}>
                Hello and welcome to twinker sapce
              </span>
            </Typography>
            <br />
            <Typography variant="p">
              Need a multilingual website? We develop and optimize websites in
              Chinese, Korean, and English.
              <br />
              Let’s bring your ideas to life!
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
