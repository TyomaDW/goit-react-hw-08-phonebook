import { useDeleteContactMutation } from '../../redux/contacts/contacts-slice';
import { Box, Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Box
      component="li"
      fullWidth
      sx={{
        display: 'inline',
        marginBottom: '5px',
        padding: '8px 12px',
        border: '1px solid rgba(33, 33, 33, 0.2)',
        borderRadius: '4px',
        '&:hover': {
          boxShadow: '-1px 15px 30px -12px black',
        },
      }}
    >
      <Typography
        sx={{
          display: 'flex',
          textAlign: 'start',
          fontWeight: 'bold',
        }}
      >
        {name + ':'}
      </Typography>
      <Box
        component="div"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontWeight: 'bold',
        }}
      >
        <Typography>{number}</Typography>
        <Button
          type="button"
          onClick={() => deleteContact(id)}
          disabled={isDeleting}
          sx={{ padding: 0, minWidth: '24px' }}
        >
          {isDeleting ? (
            <DeleteIcon
              sx={{
                color: '#3f51b5',
                background: 'white',
                '&:hover': {
                  color: 'white',
                  background: '#303f9f',
                  borderRadius: 50,
                },
              }}
            />
          ) : (
            <DeleteIcon
              sx={{
                color: '#303f9f',
                background: 'white',
                borderRadius: 50,
              }}
            />
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default ContactListItem;
