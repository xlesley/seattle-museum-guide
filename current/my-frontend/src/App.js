
import * as React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import SeattleMuseumsGuide from './SeattleMuseumsGuide';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

  // Initialize the MUI theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#B443FF',
      },
      background: {
        default: '#000000',
        paper: '#080808',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h2: {
        fontWeight: 600,
        transform: "scale(1, 3)",
        padding: ".6em 0",
      },
      body2: {
        fontSize: '1.05em',
      },
    },

  });

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          <SeattleMuseumsGuide/>
        </Typography>
    </ThemeProvider>
  );
}
