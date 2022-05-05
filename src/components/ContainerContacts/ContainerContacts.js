import { Container, Typography } from '@mui/material';

const ContainerContacts = ({ title, children }) => (
  <Container maxWidth="xs">
    {title && (
      <Typography
        sx={{
          fontWeight: 700,
          marginTop: '25px',
          textTransform: 'uppercase',
          fontSize: 20,
          color: '#5c6368',
        }}
      >
        {title}
      </Typography>
    )}
    {children}
  </Container>
);

export default ContainerContacts;
