import React, { useState } from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
function BottomNav(props) {
  // Define state for the value of the BottomNavigation
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Home" /*icon={<SmthIcon />}*/ />
      <BottomNavigationAction label="Exhibitions" /*icon={<SmthIcon />}*/ />
      <BottomNavigationAction label="Favorites" /*icon={<SmthIcon />}*/ />
      <BottomNavigationAction label="Profile" /*icon={<SmthIcon />}*/ />
    </BottomNavigation>
  );
}

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
function Navbar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Seattle Museums Guide
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import Paper from '@mui/material/Paper';
function SeattleMuseumsGuide(props) {
  return (
    <>
      <Navbar />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNav />
      </Paper>
    </>
  );
}

export default SeattleMuseumsGuide;
