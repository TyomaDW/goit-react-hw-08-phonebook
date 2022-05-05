import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../redux/auth';
import { AppBar, Container, Toolbar } from '@mui/material';

export default function AppBarCopmonent() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBar color="inherit" position="fixed">
      <Container
        maxWidth="xs"
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Toolbar disableGutters={true}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
