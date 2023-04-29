
import { deleteContact } from '../../redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { Button, List, ListItem, ListItemText, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        justifyContent: 'center',
      }}
    >
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ListItemText primary={name} secondary={number} />
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </Stack>
        </ListItem>
      ))}
    </List>
  );
};
