import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unser() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const res = await axios.post('/users/signup', credentials);
    // After successful registration, add the token to the HTTP header
    token.set(res.data.token);
    return res.data;
  } catch (error) {
    Notiflix.Notify.warning(
      `${error.message}. Please check the data. Maybe you are already registered. `
    );
  }
});

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const res = await axios.post('/users/login', credentials);
    // After successful login, add the token to the HTTP header
    token.set(res.data.token);
    return res.data;
  } catch (error) {
    Notiflix.Notify.warning(`${error.message}.Invalid login or password`);
  }
});

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    // After a successful logout, remove the token from the HTTP header
    token.unser();
  } catch (error) {}
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue();
      // return state;
    }

    // If there is a token, add it to the HTTP header and perform the request
    token.set(persistedToken);
    try {
      const res = await axios.get('/users/me');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
