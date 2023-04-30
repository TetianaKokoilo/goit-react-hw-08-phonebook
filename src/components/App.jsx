
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { AppHeader } from './AppHeader/AppHeader';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';


const Login = lazy(() => import('../../src/pages/Login/Login'));
const Home = lazy(() => import('../../src/pages/Home/Home'));
const Register = lazy(() => import('../../src/pages/Register/Register'));
const Contacts = lazy(() => import('../../src/pages/Contacts/Contacts'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <AppHeader />
      {isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="register"
              element={
                <RestrictedRoute component={Register} redirectTo="/contacts" />
              }
            ></Route>
            <Route
              path="login"
              element={
                <RestrictedRoute component={Login} redirectTo="/contacts" />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute component={Contacts} redirectTo="/contacts" />
              }
            />
          </Route>
        </Routes>
      )}
    </div>
  );
}
