import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { addContactSuccess, deleteContactSuccess, changeFilter, getContactsSuccess } from './contactsActions';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};
  
const contactsItemsReducer = createReducer(initialState.contacts.items, {
  [getContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const contactsFilterReducer = createReducer(initialState.contacts.filter, {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: contactsItemsReducer,
  filter: contactsFilterReducer,
});