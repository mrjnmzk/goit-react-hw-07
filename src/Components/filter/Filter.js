import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Filter.module.css";
import { connect } from "react-redux";
import actions from "../../redux/contacts/contactsActions";

const Filter = ({ filter, getFilter }) => {
  return (
    <div className={styles.filterWrapper}>
      <CSSTransition in={true} timeout={1000} classNames={styles}>
        <label className={styles.filter}>
          Шукати
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={(e) => {
              getFilter(e.target.value);
            }}
          />
        </label>
      </CSSTransition>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getFilter: (filter) => dispatch(actions.changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
