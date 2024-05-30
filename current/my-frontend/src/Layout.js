import React from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Navbar, BottomNavTabs } from './SeattleMuseumsGuide';

function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <Navbar />
      </Box>
      <Box sx={{ flex: '1 0 auto', p: 2, pt: 2, pb: 10, mt: 8 }}>
        <Outlet />
      </Box>
      <Box sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1000 }}>
        <BottomNavTabs />
      </Box>
    </Box>
  );
}

export default Layout;
