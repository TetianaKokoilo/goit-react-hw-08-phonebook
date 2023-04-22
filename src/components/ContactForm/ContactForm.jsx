import { useState } from 'react';
import {
  StyledInput,
  StyledForm,
  StyledName,
  StyledFormButton,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectError, selectContacts } from '../../redux/contacts/selectors';
import { toast } from 'react-hot-toast';
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
      dispatch(addContact(newContact))
    }
    if (error) {
      toast.error(error.message);
    }
    // const form = e.target;
    // const [name, number] = form.elements;

    // const credentials = {
    //   name: name.value,
    //   number: number.value,
    // };
    // dispatch(addContact(credentials));
    // form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledName>Name</StyledName>
      <StyledInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <StyledName>Number</StyledName>
      <StyledInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <StyledFormButton type="submit">Add Contacts</StyledFormButton>
    </StyledForm>
  );
};
