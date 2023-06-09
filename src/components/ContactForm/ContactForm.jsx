import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectError, selectContacts } from '../../redux/contacts/selectors';
import { toast } from 'react-hot-toast';
import { Box, Button, Grid, TextField } from '@mui/material';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const [newContact, setNewContact] = useState({
    name: '',
    number: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    setNewContact({
      name: '',
      number: '',
    });
    const isRepeat = contacts.some(
      contact => contact.name.toLowerCase() === setNewContact.name.toLowerCase()
    );
    if (isRepeat) {
      return;
    } else {
      dispatch(addContact(newContact));
    }
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            autoComplete="given-name"
            type="text"
            name="name"
            required
            fullWidth
            id="firstName"
            label="Name"
            autoFocus
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={newContact.name}
            onChange={event =>
              setNewContact({ ...newContact, name: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            autoComplete="given-name"
            name="number"
            required
            fullWidth
            id="Number"
            label="Number"
            autoFocus
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={newContact.number}
            onChange={event =>
              setNewContact({ ...newContact, number: event.target.value })
            }
          />
        </Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add Contacts
      </Button>
    </Box>
  );
};
