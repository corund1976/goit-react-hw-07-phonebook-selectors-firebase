import * as contactsActions from './contactsActions';
import * as contactsAPI from '../../services/contactsApi';

export const getContacts = () => async dispatch => {
  dispatch(contactsActions.getContactsRequest());

  try {
    const contacts = await contactsAPI.getContactsAPI();
    dispatch(contactsActions.getContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.getContactsError(error))
  }
};

export const addContact = ({ name, number }) => async dispatch => {
  dispatch(contactsActions.addContactRequest());

  try {
    const contact = { name, number };
    await contactsAPI.addContactAPI(contact);
    dispatch(contactsActions.addContactSuccess(contact));
  } catch (error) {
    dispatch(contactsActions.addContactError(error))
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(contactsActions.deleteContactRequest());

  try {
    await contactsAPI.deleteContactAPI(id);
    dispatch(contactsActions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error))
  }
};