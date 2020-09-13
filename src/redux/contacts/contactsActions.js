import actionTypes from "./contactsActionTypes";

const addContactRequest = () => {
  return {
    type: actionTypes.ADD_CONTACT_REQUEST,
  };
};

const addContactSuccess = (contact) => {
  return {
    type: actionTypes.ADD_CONTACT_SUCCESS,
    payload: {
      ...contact,
    },
  };
};

const addContactError = (error) => {
  return {
    type: actionTypes.ADD_CONTACT_ERROR,
    payload: { error },
  };
};

const fetchContactRequest = () => {
  return {
    type: actionTypes.FETCH_CONTACT_REQUEST,
  };
};

const fetchContactSuccess = (contacts) => {
  return {
    type: actionTypes.FETCH_CONTACT_SUCCESS,
    payload: contacts,
  };
};

const fetchContactError = (error) => {
  return {
    type: actionTypes.FETCH_CONTACT_ERROR,
    payload: { error },
  };
};

const removeContactRequest = () => {
  return {
    type: actionTypes.REMOVE_CONTACT_REQUEST,
  };
};

const removeContactSuccess = (id) => {
  return {
    type: actionTypes.REMOVE_CONTACT_SUCCESS,
    payload: id,
  };
};

const removeContactError = (error) => {
  return {
    type: actionTypes.REMOVE_CONTACT_ERROR,
    payload: { error },
  };
};

const changeFilter = (filter) => ({
  type: actionTypes.FILTER,
  payload: { filter },
});

const showAlert = () => ({
  type: actionTypes.ALERT,
});

const showAddError = (error) => ({
  type: actionTypes.ERROR_REQUEST,
  payload: error,
});

const showFetchError = (error) => ({
  type: actionTypes.ERROR_REQUEST,
  payload: error,
});

const showRemoveError = (error) => ({
  type: actionTypes.ERROR_REQUEST,
  payload: error,
});

export default {
  changeFilter,
  showAlert,
  showAddError,
  showFetchError,
  showRemoveError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
};
