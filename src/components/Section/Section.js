import { Container, Typography } from '@mui/material';

export default function Section({ title, children }) {
  return (
    <Container
      maxWidth="xs"
      sx={{
        marginTop: 15,
        textAlign: 'center',
        minWidth: 280,
        border: '1px solid grey',
        borderRadius: '25px',
        background: 'white',
        boxShadow: '-1px 15px 30px -12px black',
        zIndex: 9999,
      }}
    >
      {title && (
        <Typography
          sx={{
            fontWeight: 700,
            padding: '20px',
            textTransform: 'uppercase',
            fontSize: 24,
            color: '#5c6368',
          }}
        >
          {title}
        </Typography>
      )}
      {children}
    </Container>
  );
}
