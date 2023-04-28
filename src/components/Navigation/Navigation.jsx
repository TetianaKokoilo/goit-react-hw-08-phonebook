import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Toolbar, Typography } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Toolbar>
      {' '}
      <NavLink to="/">
        <Typography variant="h6" component="a" sx={{ flexGrow: 1 }} color='white'>
          Home
        </Typography>
      </NavLink>
      {isLoggedIn && <NavLink to="/contacts">        <Typography variant="h6" component="a" sx={{ flexGrow: 1 }}>
          Contacts
        </Typography></NavLink>}
    </Toolbar>
  );
};
