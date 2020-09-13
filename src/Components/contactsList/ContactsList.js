import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./ContactsList.module.css";
import ContactsListItems from "../contactsListItem/ContactsListItems";
import { connect } from "react-redux";

class ContactsList extends Component {
  render() {
    return (
      <>
        <TransitionGroup component="ul" className={styles.contactsList}>
          {this.props.contacts.map(contact => (
            <CSSTransition key={contact.id} in={this.props.contacts.length > 0} timeout={250} classNames={styles}>
              <ContactsListItems contact={contact} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.filter
      ? state.contacts.items.filter(contact => contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase()))
      : state.contacts.items
  };
};

export default connect(mapStateToProps)(ContactsList);
