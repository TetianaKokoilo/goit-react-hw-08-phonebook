
import { StyledText, StyledList, StyledItems, StyledContactButton } from './ContactList.styled'
import { deleteContact } from '../../redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';


export const ContactList = () => {

   const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  //   useEffect(() => {
  //   dispatch(fetchContacts());
  //   }, [dispatch]);
  
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);
  // const filterContact = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  return (
    <StyledList>
      {contacts.map(({ id, name, number }) => (
        <StyledItems key={id}>
          <StyledText>{name}:</StyledText>
          <StyledText>{number}</StyledText>
          <StyledContactButton type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </StyledContactButton>
        </StyledItems>
      ))}
    </StyledList>
  );
};
