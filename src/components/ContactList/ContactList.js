import { useFetchContactsQuery } from '../../redux/contacts/contacts-slice';

import ContactListItem from '../ContactListItem';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { useSelector } from 'react-redux';
import { SpinnerMutatingDots } from '../Spinner/Spinner';
import { Box } from '@mui/material';

const ContactList = () => {
  const { data, isFetching } = useFetchContactsQuery();

  const filter = useSelector(getFilter).toLowerCase();
  const getFiltredContacts = contacts =>
    contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  const filtred = data ? getFiltredContacts(data) : [];

  return (
    <>
      {isFetching && <SpinnerMutatingDots />}
      <Box
        component="ul"
        maxWidth="xs"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '260px',
          margin: 'auto',
          marginBottom: '20px',
          padding: '16px',
          border: '1px solid #2a2a2a',
          borderRadius: '4px',
        }}
      >
        {filtred &&
          filtred.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
      </Box>
    </>
  );
};

export default ContactList;
