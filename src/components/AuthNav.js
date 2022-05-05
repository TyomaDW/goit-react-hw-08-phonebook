import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';

export default function AuthNav() {
  return (
    <Box>
      <Button component={NavLink} to="/register" sx={{ color: '#3f51b5' }}>
        Sign up
      </Button>
      <Button component={NavLink} to="/login" sx={{ color: '#3f51b5' }}>
        Login
      </Button>
    </Box>
  );
}
