// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import {
//   StyledTitle,
//   StyledContainer,
//   StyledContactsTitle,
// } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { AppBar } from './AppBar/AppBar';


const Login = lazy(() => import('../../src/pages/Login/Login'));
const Home = lazy(() => import('../../src/pages/Home/Home'));
const Register = lazy(() => import('../../src/pages/Register/Register'));
const Contacts = lazy(() => import('../../src/pages/Contacts/Contacts'));

export function App() {
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
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
            {/* <Route
              path="contacts"
              element={
                <RestrictedRoute component={Contacts} redirectTo="/contacts" />
              }
            /> */}
          </Route>
        </Routes>
      )}
    </div>
  );
}
