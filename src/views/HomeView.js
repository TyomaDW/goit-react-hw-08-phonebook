import { Typography } from '@mui/material';

const HomeView = () => (
  <>
    <Typography
      sx={{
        color: 'inherit',
        fontWeight: 700,
      }}
      align="center"
      mt={32}
    >
      Welcome to
      <Typography
        sx={{
          fontWeight: 900,
          color: '#3f51b5',
        }}
      >
        CONTACTS APP
      </Typography>
    </Typography>
  </>
);

export default HomeView;
