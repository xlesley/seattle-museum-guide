import React from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Navbar, BottomNavTabs } from './SeattleMuseumsGuide';

function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box sx={{ flex: '1 0 auto', p: 2 }}>
        <Outlet />
      </Box>
      <BottomNavTabs />
    </Box>
  );
}

export default Layout;
