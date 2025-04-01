import * as React from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCss3,
  SiOracle,
  SiSpring,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";
import { fontWeight } from "@mui/system";

const icons = [
  { id: 1, Component: SiReact },
  { id: 2, Component: SiJavascript },
  { id: 3, Component: SiTypescript },
  { id: 4, Component: RiNextjsFill },
  { id: 5, Component: SiPython },
  { id: 6, Component: SiCss3 },
  { id: 7, Component: SiOracle },
  { id: 8, Component: TbBrandMysql },
  { id: 9, Component: SiSpring },
];

const getRandomColor = () => {
  const colors = [
    "#ff69b4",
    "#ff6347",
    "#ff4500",
    "#1e90ff",
    "#32cd32",
    "#8a2be2",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Skills = () => {
  return (
    <Box display="flex" gap={15} padding={6} border="0px" width="100%">
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gap={5}
        justifyContent="center"
        alignItems="center"
        marginLeft={10}
      >
        {icons.map((icon, index) => {
          const randomColor = getRandomColor();
          return (
            <motion.div
              key={icon.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <icon.Component size={65} color={randomColor} />
            </motion.div>
          );
        })}
      </Box>

      {/* 오른쪽: 텍스트 영역 */}
      <Box sx={{ marginLeft: 10, marginTop: 3 }}>
        <Typography variant="h5" fontWeight="bold" fontFamily="cursive">
          what can you build?
        </Typography>

        <Typography variant="subtitle1" sx={{ marginTop: 5 }}>
          🌐 <span style={{ fontWeight: "bold" }}>Business Websites - </span>
          Establish your online presence and attract customers.
        </Typography>

        <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
          📖{" "}
          <span style={{ fontWeight: "bold" }}>
            Blog & Content Platforms -{" "}
          </span>
          Share insights and grow your audience.
        </Typography>

        <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
          🎓{" "}
          <span style={{ fontWeight: "bold" }}>
            Online Courses & Membership Sites -{" "}
          </span>
          Monetize knowledge with premium content.
        </Typography>

        <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
          📢{" "}
          <span style={{ fontWeight: "bold" }}>
            Landing Pages & Marketing Funnels -{" "}
          </span>
          Share insights and grow your audience.
        </Typography>
      </Box>
    </Box>
  );
};

export default Skills;
