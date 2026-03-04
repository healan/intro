import * as React from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useMediaQuery, useTheme } from "@mui/material";
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      display="flex"
      gap={{ xs: 2, sm: 5, md: 10, lg: 15 }}
      padding={{ xs: 2, sm: 4, md: 6 }}
      border="0px"
      width="100%"
      flexDirection={{ xs: "column", md: "row" }} // ✅ 반응형 방향 설정
    >
      <Box
        display="grid"
        sx={{
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)", // 모바일: 2열
            sm: "repeat(3, 1fr)", // 태블릿 이상: 3열
            md: "repeat(3, 1fr)", // 데스크톱 이상: 4열
          },
          gap: { xs: 2, sm: 3, md: 5 },
          justifyContent: "center",
          alignItems: "center",
          marginLeft: { xs: 0, sm: 2, md: 5, lg: 10 },
        }}
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
      <Box
        sx={{
          marginLeft: {
            xs: 0, // 모바일: 왼쪽 여백 없음
            sm: 5, // 작은 화면 이상: 약간의 여백
            md: 8, // 중간 화면 이상: 더 넓은 여백
            lg: 10, // 큰 화면 이상: 많이 띄움
          },
          marginTop: {
            xs: 2, // 모바일: 여백 작게
            sm: 3,
            md: 5,
          },
        }}
      >
        <Typography variant="h5" fontWeight="bold" fontFamily="cursive">
          what can you build?
        </Typography>

        <Typography variant="subtitle1" sx={{ marginTop: 5 }}>
          🌐{" "}
          <span style={{ fontWeight: "bold" }}>
            Business Websites {!isMobile && "-"}{" "}
          </span>
          {isMobile && <br />}Establish your online presence and attract
          customers.
        </Typography>

        <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
          📖{" "}
          <span style={{ fontWeight: "bold" }}>
            Blog & Content Platforms {!isMobile && "-"}{" "}
          </span>
          {isMobile && <br />}Share insights and grow your audience.
        </Typography>

        <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
          🎓{" "}
          <span style={{ fontWeight: "bold" }}>
            Online Courses & Membership Sites {!isMobile && "-"}{" "}
          </span>
          {isMobile && <br />}Monetize knowledge with premium content.
        </Typography>

        <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
          📢{" "}
          <span style={{ fontWeight: "bold" }}>
            Landing Pages & Marketing Funnels {!isMobile && "-"}{" "}
          </span>
          {isMobile && <br />}Share insights and grow your audience.
        </Typography>
      </Box>
    </Box>
  );
};

export default Skills;
