import React from "react";
import {
  Typography,
  Box,
  Button,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import DeckIcon from "@mui/icons-material/Deck";
import "../css/Component.css";
import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const moveTo = useNavigate();
  const pages = ["Home", "Intro", "Skills", "Blog", "Contact"];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      moveTo(`/?scrollTo=${id}`);
    }
  };

  return (
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
  );
};

export default Appbar;
