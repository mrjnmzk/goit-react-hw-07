import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contacts/contactsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  contacts: contactsReducer
});

const middleware = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
