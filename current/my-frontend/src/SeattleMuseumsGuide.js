import React, { useState } from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import FolderIcon from '@mui/icons-material/Folder';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function BottomNavTabs() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        //   icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        //   icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        //   icon={<LocationOnIcon />}
      />
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

import Paper from "@mui/material/Paper";
function SeattleMuseumsGuide(props) {
  return (
    <>
      <Navbar />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavTabs />
      </Paper>
    </>
  );
}

export default SeattleMuseumsGuide;
