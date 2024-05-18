import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import FolderIcon from '@mui/icons-material/Folder';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from "@mui/icons-material/Home";
import MuseumIcon from "@mui/icons-material/Museum";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookIcon from "@mui/icons-material/Book";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Paper from '@mui/material/Paper';

export function BottomNavTabs() {
  // const [value, setValue] = React.useState("home");

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  const [value, setValue] = React.useState('/');
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <Box display="flex" justifyContent="center">
        <BottomNavigation
          sx={{ width: 500 }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="Home"
            value="/"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            label="Museums"
            value="museums"
            icon={<AccountBalanceIcon />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Exhibitions"
            value="exhibitions"
            icon={<BookIcon />}
          />
          <BottomNavigationAction
            label="Profile"
            value="profile"
            icon={<AccountBoxIcon />}
          />
        </BottomNavigation>
      </Box>
    </Paper>
  );
}
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
export function Navbar(props) {
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
            <MuseumIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Seattle Museums Guide
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// import Paper from "@mui/material/Paper";
// function SeattleMuseumsGuide(props) {
//   return (
//     <>
//       <Navbar />
//       <BottomNavTabs />
//     </>
//   );
// }

// export default SeattleMuseumsGuide;
