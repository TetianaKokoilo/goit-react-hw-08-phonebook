import { ContactForm, ContactList, Filter } from 'components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
// import {
//   selectContacts,
//   selectError,
//   selectIsLoading,
// } from 'redux/contacts/selectors';

const Contacts = () => {
  // const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Contacts</h2>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
