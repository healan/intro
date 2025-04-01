import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function Intro() {
  const cards = [
    {
      id: 1,
      title: "Multilingual Web Development",
      description:
        "Build websites in Chinese, Korean, and English! Custom solutions for global businesses.",
      imgsrc: "/img/intro/website.png",
    },
    {
      id: 2,
      title: "Website Maintenance & Optimization",
      description:
        " Keep your website fast and secure! Performance tuning and technical support.",
      imgsrc: "/img/intro/search.jpg",
    },
    {
      id: 3,
      title: "Multilingual Content & Localization",
      description:
        "Culturally adapted translations for a seamless global user experience.",
      imgsrc: "/img/intro/localization.jpg",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(400px, 100%), 1fr))",
        gap: 4,
      }}
    >
      {cards.map((card) => (
        <Card sx={{ borderRadius: 5 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              width="100%"
              image={card.imgsrc}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
