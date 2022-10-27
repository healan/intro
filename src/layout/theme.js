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
        main: '#009688',
        contrastText: '#fff',
      },
      indigo: {
        main: '#1a237e',
        contrastText: '#fff',
      }
    },
});

export default theme;