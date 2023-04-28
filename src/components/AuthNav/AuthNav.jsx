import { NavLink } from 'react-router-dom';
import '@fontsource/roboto/400.css';
import { Toolbar, Typography } from '@mui/material';


export const AuthNav = () => {


  return (
    <Toolbar>
      <NavLink to="/register">
        {' '}
        <Typography variant="h6" component="a" sx={{ flexGrow: 1,  mr: 2 }} color="white">
          Register
        </Typography>
      </NavLink>
      <NavLink to="/login">
        {' '}
        <Typography variant="h6" component="a" sx={{ flexGrow: 1 }} color="white">
          Log In
        </Typography>
      </NavLink>
    </Toolbar>
  );
};
