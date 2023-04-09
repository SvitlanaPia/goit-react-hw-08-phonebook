import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
  logOut,
} from './operations';

const extraActions = [fetchContacts, addContact, deleteContact];
const getActions = type => extraActions.map(action => action[type]);

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  return {
    ...state,
    isLoading: true,
  };
};

const handleRejected = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload,
  };
};

const handleFetchContactsSuccess = (state, action) => {
  return { ...state, isLoading: false, error: null, items: action.payload };
};

const handleAddContactSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: [action.payload, ...state.items],
  };
};

const handleDeleteContactSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: state.items.filter(item => item.id !== action.payload.id),
  };
};

const handleEditContactSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: state.items.map(item => {
      if (item.id === action.payload.id) {
        return action.payload;
      }
      return item;
    }),
  };
};

const handleLogoutSuccess = state => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: [],
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected)
      .addMatcher(isAnyOf(fetchContacts.fulfilled), handleFetchContactsSuccess)
      .addMatcher(isAnyOf(addContact.fulfilled), handleAddContactSuccess)
      .addMatcher(isAnyOf(deleteContact.fulfilled), handleDeleteContactSuccess)
      .addMatcher(isAnyOf(editContact.fulfilled), handleEditContactSuccess)
      .addMatcher(isAnyOf(logOut.fulfilled), handleLogoutSuccess),
});

export const contactsReducer = contactsSlice.reducer;
