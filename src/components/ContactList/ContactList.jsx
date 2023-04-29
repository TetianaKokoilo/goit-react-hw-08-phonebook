// import { StyledText, StyledList, StyledItems, StyledContactButton } from './ContactList.styled'
import { deleteContact } from '../../redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { List, ListItem, ListItemText } from '@mui/material';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ListItemText primary={name} secondary={number} />
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </ListItem>
      ))}
    </List>
  );
};
