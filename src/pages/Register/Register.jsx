import {
  Avatar,
  Box,
  Container,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Register = () => {
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
          {/* <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
            Registration
          </Typography> */}
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <RegisterForm />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
