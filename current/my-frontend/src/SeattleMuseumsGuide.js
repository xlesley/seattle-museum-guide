import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

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
      <BottomNavigationAction label="Exhibitions" /*icon={<SmthIcon />}*//>
      <BottomNavigationAction label="Favorites" /*icon={<SmthIcon />}*//>
      <BottomNavigationAction label="Profile" /*icon={<SmthIcon />}*//>
    </BottomNavigation>
  );
}

function SeattleMuseumsGuide(props) {
  return (
    <>
      <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
        Seattle Museums Guide
      </Typography>
      <BottomNav />
    </>
  );
}

export default SeattleMuseumsGuide;