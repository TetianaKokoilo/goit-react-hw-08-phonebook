import { Box, Container, ThemeProvider, createTheme } from '@mui/material';
import { ContactForm, ContactList, Filter } from 'components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';


const Contacts = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2>Contacts</h2>
          <ContactForm />
          <Filter />
          <ContactList />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Contacts;
