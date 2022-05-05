import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../redux/auth';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [value, setValue] = React.useState('contacts');

  return (
    <Box
      maxWidth="xs"
      sx={{
        color: '#303f9f',
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={NavLink}
          to="/"
          label="Home"
          value="home"
          sx={{
            '&:focus': {
              color: '#303f9f',
            },
          }}
          icon={
            <HomeIcon
              sx={{
                color: '#303f9f',
              }}
            />
          }
        />
        {isLoggedIn && (
          <BottomNavigationAction
            component={NavLink}
            to="/contacts"
            label="Contacts"
            value="contacts"
            sx={{
              '&:focus': {
                color: '#303f9f',
              },
            }}
            icon={
              <PhoneIcon
                sx={{
                  color: '#303f9f',
                }}
              />
            }
          />
        )}
      </BottomNavigation>
    </Box>
  );
};

export default Navigation;
