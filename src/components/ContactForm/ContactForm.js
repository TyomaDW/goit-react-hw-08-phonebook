import React, { useState } from 'react';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from '../../redux/contacts/contacts-slice';
import { SpinnerAudio } from '../Spinner/Spinner';
import toast, { Toaster } from 'react-hot-toast';
import { Box, TextField, Button } from '@mui/material';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useFetchContactsQuery();
  const [createContact, { isLoading }] = useCreateContactMutation();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (
      data.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      )
    ) {
      toast.error(`${name} is already in contacts!`);
    } else {
      await createContact({ name, number });
    }
    setName('');
    setNumber('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      sx={{
        maxWidth: '260px',
        margin: 'auto',
        padding: '16px',
        border: '1px solid #2a2a2a',
        borderRadius: '4px',
        '&:hover': {
          boxShadow: '-1px 15px 30px -12px black',
        },
      }}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <TextField
        margin="none"
        fullWidth
        required
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
      <TextField
        margin="normal"
        fullWidth
        required
        label="Number"
        variant="outlined"
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          width: 80,
          color: 'white',
          background: '#3f51b5',
          fontWeight: 600,
          '&:hover': {
            backgroundColor: '#303f9f',
          },
        }}
      >
        {isLoading && <SpinnerAudio />}
        add
      </Button>
    </Box>
  );
}
