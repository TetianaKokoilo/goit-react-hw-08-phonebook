import { Navigation } from 'components/Navigation/Navigation';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { AppBar, Box } from '@mui/material';

export const AppHeader = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBar>
    </Box>
  );
};
