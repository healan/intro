import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import routes from "./Routes.js";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {routes.map((prop, key) => {
          return <Route path={prop.path} element={prop.element()} key={key} />;
        })}
      </Routes>
    </ThemeProvider>
  );
};

export default hot(module)(App);
