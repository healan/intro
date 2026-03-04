import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Container } from "@mui/material";
import Home from "../component/Home";
import Intro from "../component/Intro";
import Skills from "../component/Skills";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
import "../css/Main.css";

export default function Portfolio() {
  const location = useLocation();
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
    {
      id: "Blog",
      title: "The palest ink is better than the best memory. ✍️",
      content: <Blog />,
    },
    {
      id: "Contact",
      title: "Contact Me! 🤙",
      content: <Contact />,
    },
  ];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("scrollTo");
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        // setTimeout은 DOM 렌더 완료 대기용
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });

          const newUrl = window.location.pathname;
          window.history.replaceState({}, "", newUrl);
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="portfolio-container">
      <Box className="home" id="Home">
        <Typography variant="body1">{<Home />}</Typography>
      </Box>

      {sections.map((section) => (
        <Box key={section.id} id={section.id} className="section">
          <Container class="title">
            <Typography
              variant="h3"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" }, // 반응형 폰트 크기
              }}
            >
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
