import { Box, Button, Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box>
      {' '}
      {/* <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
        Welcome, {user.name}
      </Typography> */}
            <Typography component="p" variant="p" sx={{ p: 1, fontWeight: 'light', }}>Welcome, {user.name}</Typography>
      {/* <p> </p> */}
      <Button
          type="button"
          color="inherit"
          onClick={() => dispatch(logOut())}
        >
          Logout
        </Button>
      {/* <Button type="button" variant="contained" >Logout</Button> */}
      {/* <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button> */}
    </Box>
  );
};
