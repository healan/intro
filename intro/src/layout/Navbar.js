import React, { useEffect, useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import theme from './theme';

export default function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <MuiAppBar position="static" color='indigo'>
          <Toolbar>
              <IconButton
                  size="small"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 1 }}
                  href='/'
              >
                
            </IconButton>
            <Typography component="div" variant="h6" sx={{ flexGrow: 1 }}  color="inherit">
                  L
            </Typography>  
              <Button color="inherit">About me.</Button>
              <Button color="inherit" href='/camera'>Experience.</Button>
              <Button color="inherit" href='/camera'>Contact ME.</Button>
          </Toolbar>
        </MuiAppBar>
      </ThemeProvider>
    );
}