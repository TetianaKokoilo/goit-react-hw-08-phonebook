import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import {
  StyledTitle,
  StyledContainer,
  StyledContactsTitle,
} from './App.styled';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

export function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledContainer>
      <StyledTitle>Phonebook</StyledTitle>
      <ContactForm />

      <StyledContactsTitle>Contacts</StyledContactsTitle>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </StyledContainer>
  );
}
