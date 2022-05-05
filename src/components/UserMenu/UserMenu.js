import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { Container, Typography, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: 'inherit',
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <AccountCircleIcon
          sx={{
            color: 'white',
            background: '#303f9f',
            borderRadius: 50,
            marginRight: 1,
          }}
        />
        {name}
      </Typography>

      <Button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        sx={{
          marginLeft: 2,
          color: '#3f51b5',
          background: 'white',
          borderRadius: 50,
          '&:hover': {
            color: 'white',
            background: '#303f9f',
          },
        }}
      >
        <LogoutIcon />
      </Button>
    </Container>
  );
}
