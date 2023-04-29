import { Box, Button, Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box>
      <Typography component="p" variant="p" sx={{ p: 1, fontWeight: 'light' }}>
        Welcome, {user.name}
      </Typography>
      <Button type="button" color="inherit" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Box>
  );
};
