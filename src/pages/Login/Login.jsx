import { Box, Container, ThemeProvider, createTheme } from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';

const Login = () => {
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
          <h1>Log in</h1>
          <LoginForm />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
