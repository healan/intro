import * as React from "react";
import { Box, Typography, Container } from "@mui/material";
import Home from "../component/Home";
import Intro from "../component/Intro";
import Skills from "../component/Skills";
import "../css/Main.css";

export default function Portfolio() {
  const sections = [
    {
      id: "Intro",
      title: "Let’s build something amazing together! 🎡",
      content: <Intro />,
    },
    {
      id: "Skills",
      title: "Bringing ideas to life with modern web technologies! 🎈",
      content: <Skills />,
    },
    { id: "Blog", title: "Blog", content: "Latest insights and articles." },
    {
      id: "Contact",
      title: "Contact Me",
      content: "Get in touch via LinkedIn or Email.",
    },
  ];

  return (
    <div className="portfolio-container">
      <Box className="home" id="Home">
        <Typography variant="body1">{<Home />}</Typography>
      </Box>

      {sections.map((section) => (
        <Box key={section.id} id={section.id} className="section">
          <Container class="title">
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              {section.title}
            </Typography>
          </Container>
          <Typography variant="body1">{section.content}</Typography>
        </Box>
      ))}

      <footer className="footer">
        <Typography variant="body2">
          © 2025 My Portfolio. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}
