import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    status: {
      danger: '#009688',
    },
    palette: {
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
      teal: {
        main: '#034f84',
        contrastText: '#fff',
      }
    },
});

export default theme;