import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { Box, TextField } from '@mui/material';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        maxWidth: '260px',
        margin: 'auto',
        padding: '12px',
      }}
    >
      <TextField
        margin="none"
        label="Find contacts by name"
        variant="outlined"
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </Box>
  );
};

export default Filter;
