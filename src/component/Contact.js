import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

const URL = process.env.REACT_APP_API_URL;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const checkValid = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    }

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((msg) => msg !== "");

    if (!hasError) {
      try {
        axios.post(`${URL}/contact`, formData).then((res) => {
          if (res.status === 201) {
            alert(res.data.msg);
            setFormData({ name: "", email: "", message: "" });
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 1fr,1fr))",
      }}
    >
      <Grid
        container
        sx={{
          height: { xs: "auto", md: 570 },
          // boxShadow: 3,
          overflow: "hidden",
          marginTop: -15,
        }}
      >
        {/* 왼쪽 이미지 */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/img/intro/message.svg"
            alt="Contact"
            sx={{
              width: "100%",
              height: { xs: "auto", md: "100%" },
              // mt: -8,
            }}
          />
        </Grid>

        {/* 오른쪽 폼 */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 4,
            py: 3,
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography variant="body2" color="text.secondary" mb={3}>
              I’ll get back to you in 1-2 business days.
            </Typography>

            <Stack spacing={2}>
              <TextField
                label="Your Name"
                id="name"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                error={Boolean(errors.name)}
                helperText={errors.name}
              />
              <TextField
                label="Email Address"
                id="email"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
              <TextField
                label="Message"
                id="message"
                multiline
                rows={2}
                fullWidth
                value={formData.message}
                onChange={handleChange}
                error={Boolean(errors.message)}
                helperText={errors.message}
              />
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#feca05", // 원하는 배경색
                  color: "#000000", // 텍스트 색상
                  "&:hover": {
                    backgroundColor: "#A29415", // 호버 색상
                  },
                }}
                onClick={() => checkValid()}
              >
                Send
              </Button>
            </Stack>

            <Box mt={4} textAlign="center">
              <Typography variant="body1" gutterBottom>
                Or find me on
              </Typography>
              <Stack direction="row" justifyContent="center" spacing={2}>
                <IconButton
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener"
                  color="primary"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="mailto:your.email@gmail.com"
                  target="_blank"
                  rel="noopener"
                  color="error"
                >
                  <EmailIcon />
                </IconButton>
                <IconButton
                  href="https://github.com/your-github"
                  target="_blank"
                  rel="noopener"
                  color="default"
                >
                  <GitHubIcon />
                </IconButton>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
