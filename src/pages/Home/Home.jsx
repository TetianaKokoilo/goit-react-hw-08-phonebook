
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
        PhoneBook
      </Typography>
      <Typography component="h1" variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
        Welcome my friend!
      </Typography>
      <Typography component="p" variant="p" sx={{ p: 5, fontWeight: 'light', fontStyle: 'italic', textAlign: 'center' }}>
        PhoneBook allows you to quickly find the contact you want by searching by first name, last name, and phone number. Never lose your contacts again!
      </Typography>
    </Box>
  );
};

export default Home;
