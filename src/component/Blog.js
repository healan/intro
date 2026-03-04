import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { Grid } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Blog = () => {
  const moveTo = useNavigate();
  const URL = process.env.REACT_APP_API_URL;
  const [contents, setContents] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/content/1`)
      .then((res) => {
        setContents(res.data);
        console.log(35, res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr", // 모바일: 1열
            sm: "repeat(2, 1fr)", // 태블릿: 2열
            md: "repeat(3, 1fr)", // 중간 이상: 3열
            lg: "repeat(3, 1fr)", // 큰 화면: 4열
          },
          gap: { xs: 2, sm: 3, md: 4 }, // 화면 크기에 따라 gap 조정
          padding: { xs: 1, sm: 2, md: 4 }, // 내부 여백도 반응형으로
        }}
      >
        {contents.length > 0 &&
          contents.map((content) => (
            <Grid
              item
              key={content.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: 2,
                cursor: "pointer",
                transition: "background-color 0.2s ease",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                  borderRadius: "10px",
                },
              }}
              onClick={() => moveTo(`/content/${content.id}`)}
            >
              {/* 가시성이 높은 줄 스타일 */}
              <hr
                style={{
                  width: "100%",
                  height: "0.3px",
                  backgroundColor: "#282c34",
                  border: "none",
                  margin: "4px 0",
                }}
              />

              {/* 텍스트 영역 */}
              <Typography variant="subtitle1" sx={{ marginTop: 5 }}>
                Programing
              </Typography>
              <Typography variant="h5" sx={{ marginTop: 1 }}>
                {content.title}
              </Typography>

              {/* 이미지 크기 조정 */}
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "300px",
                  height: "200px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 4,
                }}
              >
                <img
                  src={content.imgsrc}
                  alt="content image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              </Box>
            </Grid>
          ))}
      </Box>
      <div>
        <Button
          variant="text"
          endIcon={<ArrowForwardIosIcon fontSize="small" />}
          sx={{
            color: "grey.700",
            textTransform: "none",
            "&:hover": {
              color: "grey.900",
              backgroundColor: "transparent",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            marginTop: 5,
          }}
          onClick={() => alert("Coming Soon!")}
        >
          Read More
        </Button>
      </div>
    </>
  );
};

export default Blog;
