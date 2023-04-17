import {
  StyledInput,
  StyledForm,
  StyledName,
  StyledFormButton,
} from './ContactForm.styled';
// import { addContact } from '../../redux/contacts/operations';
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';

export const ContactForm = () => {
  // const dispatch = useDispatch();

  const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const [name, email, password] = form.elements;

  //   const credentials = {
  //     name: name.value,
  //     email: email.value,
  //     password: password.value,
  //   };
  //   dispatch(register(credentials));
  //   form.reset();
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
