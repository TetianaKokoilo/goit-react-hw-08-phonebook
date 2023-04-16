import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filtersReducer } from './contacts/filterSlice';

export const store = configureStore({
  reducer: { contacts: contactsReducer, filters: filtersReducer },
});
