// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';
import { Box, TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="Find contacts by named"
        variant="standard"
        type="text"
        onChange={event => dispatch(setFilter(event.target.value))}
      />
    </Box>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.func,
// }
