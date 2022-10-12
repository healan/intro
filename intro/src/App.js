import React from 'react';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './layout/Navbar';
import routes from './Routes.js';

function App() {
  return (
    <Router>
        <div>
            <Box sx={{ flexGrow: 1 }}>
              <Navbar />
            </Box>
            <Routes>
              {routes.map((prop, key) => {
                return (
                  <Route
                    path={prop.path}
                    element={prop.element()}
                    key={key}
                  />
                );
              })}
            </Routes>
        </div>
      </Router>
  );
}

export default App;
