import axios from "axios";
import contactsActions from "../contacts/contactsActions";

const onAddContact = contact => dispatch => {
  dispatch(contactsActions.addContactRequest());
  axios
    .post("https://hwasync-redux-bc22.firebaseio.com/contacts.json", contact)
    .then(res => {
      // console.log("res onAddContact", res);
      dispatch(
        contactsActions.addContactSuccess({
          id: res.data.name,
          ...JSON.parse(res.config.data)
        })
      );
    })
    .catch(error => {
      // console.log("error", error);
      dispatch(contactsActions.addContactError(error));
    });
};

const onFetchContacts = () => dispatch => {
  dispatch(contactsActions.fetchContactRequest());
  axios
    .get("https://hwasync-redux-bc22.firebaseio.com/contacts.json")
    .then(res => {
      // console.log("fetch", res);

      const keys = Object.keys(res.data);
      const contacts = [];

      for (const key of keys) {
        const contact = { id: key, ...res.data[key] };
        // console.log("contact", contact);
        contacts.push(contact);
      }

      // console.log("contacts", contacts);
      dispatch(contactsActions.fetchContactSuccess(contacts));
    })
    .catch(error => {
      dispatch(contactsActions.fetchContactError(error));
    });
};

const onRemoveContact = id => dispatch => {
  dispatch(contactsActions.removeContactRequest());
  axios
    .delete(`https://hwasync-redux-bc22.firebaseio.com/contacts/${id}.json`)
    .then(() => {
      dispatch(contactsActions.removeContactSuccess(id));
    })
    .catch(error => {
      dispatch(contactsActions.removeContactError(error));
    });
};

export default {
  onAddContact,
  onFetchContacts,
  onRemoveContact
};
