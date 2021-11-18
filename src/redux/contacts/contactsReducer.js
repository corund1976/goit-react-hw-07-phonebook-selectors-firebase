import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { getContactsRequest, getContactsSuccess, getContactsError, addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError, changeFilter } from './contactsActions';

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

const errorReducer = createReducer(null, {
  [getContactsError]: (_, { payload }) => payload,
  [getContactsRequest]: () => null, //стираем ошибку, чтоб не висела перед глазами всё время
  [addContactError]: (_, { payload }) => payload,
  [addContactRequest]: () => null,
  [deleteContactError]: (_, { payload }) => payload,
  [deleteContactRequest]: () => null,
});

export default combineReducers({
  items: contactsItemsReducer,
  filter: contactsFilterReducer,
  error: errorReducer,
});