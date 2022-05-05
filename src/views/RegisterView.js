import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { Box, TextField, Button } from '@mui/material';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      sx={{
        marginTop: 10,
      }}
    >
      <TextField
        helperText="Please enter your name"
        margin="normal"
        fullWidth
        required
        label="Name"
        variant="outlined"
        type="name"
        name="name"
        value={name}
        onChange={handleChange}
      />

      <TextField
        helperText="Please enter your email"
        margin="normal"
        fullWidth
        required
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />

      <TextField
        helperText="Please enter your password"
        margin="normal"
        fullWidth
        required
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          background: '#303f9f',
          '&:hover': {
            background: '#3f51b5',
          },
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
}
