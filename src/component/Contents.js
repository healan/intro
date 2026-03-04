import React, { useEffect, useState } from "react";
import axios from "axios";
import Appbar from "./Appbar";
import "../css/Component.css"; // 스타일 파일을 임포트
import { useParams } from "react-router";
import { Box, Typography, Container, Avatar, Stack } from "@mui/material";
import { Grid, margin } from "@mui/system";

const Contents = () => {
  const [content, setContent] = useState();
  const id = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:1001/content/${id}`)
      .then((res) => {
        console.log(35, res);
        if (res.data) setContent(res.data.id[2].content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Box>
      <Appbar />
      <Box
        component="img"
        src="/img/blog/srch.jpg"
        alt="Cover"
        sx={{
          width: "100%",
          height: { xs: 200, md: 400 },
          objectFit: "cover",
        }}
      />
      {/* 콘텐츠 영역 */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        {/* 제목 */}
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          블로그 글의 제목입니다
        </Typography>

        {/* Publisher 정보 */}
        <Stack direction="row" alignItems="center" spacing={2} mb={4}>
          <Avatar alt="Author" src="https://i.pravatar.cc/150?img=3" />
          <Box>
            <Typography variant="subtitle1">작성자: 김블로거</Typography>
            <Typography variant="caption" color="text.secondary">
              2025년 4월 22일 · 5분 읽기
            </Typography>
          </Box>
        </Stack>

        {/* 본문 내용 */}
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Typography>
      </Container>

      <footer className="footer">
        <Typography variant="body2">
          © 2025 My Portfolio. All rights reserved.
        </Typography>
      </footer>
    </Box>
  );
};

export default Contents;
