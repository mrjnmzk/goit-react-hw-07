import { combineReducers } from "redux";
import actionTypes from "./contactsActionTypes";

const items = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_CONTACT_SUCCESS:
      return [...state, action.payload];

    case actionTypes.FETCH_CONTACT_SUCCESS:
      return action.payload;

    case actionTypes.REMOVE_CONTACT_SUCCESS:
      return state.filter((contact) => contact.id !== action.payload);

    default:
      return state;
  }
};

const filter = (state = "", action) => {
  switch (action.type) {
    case actionTypes.FILTER:
      return action.payload.filter;

    default:
      return state;
  }
};

const alert = (state = false, action) => {
  switch (action.type) {
    case actionTypes.ALERT:
      return !state;

    default:
      return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case actionTypes.ADD_CONTACT_REQUEST:
    case actionTypes.FETCH_CONTACT_REQUEST:
    case actionTypes.REMOVE_CONTACT_REQUEST:
      return true;

    case actionTypes.ADD_CONTACT_SUCCESS:
    case actionTypes.ADD_CONTACT_ERROR:
    case actionTypes.FETCH_CONTACT_SUCCESS:
    case actionTypes.FETCH_CONTACT_ERROR:
    case actionTypes.REMOVE_CONTACT_SUCCESS:
    case actionTypes.REMOVE_CONTACT_ERROR:
      return false;

    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case actionTypes.ADD_CONTACT_ERROR:
    case actionTypes.FETCH_CONTACT_ERROR:
    case actionTypes.REMOVE_CONTACT_ERROR:
      return action.payload;

    case actionTypes.ADD_CONTACT_REQUEST:
    case actionTypes.FETCH_CONTACT_REQUEST:
    case actionTypes.REMOVE_CONTACT_REQUEST:
      return null;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
  alert,
  loading,
  error,
});
