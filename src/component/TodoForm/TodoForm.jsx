import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./todoform.module.css";

const TodoForm = ({ addTodos, showAdd }) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      alert("No Blank todo!");
      return;
    }

    if (value.length >= 40) {
      alert("Please create short todo!");
      return;
    }

    addTodos(value);
    setValue("");
  };

  if (showAdd) {
    return (
      <section className={styles.add}>
        <form action="" className={styles.addForm} onSubmit={handleFormSubmit}>
          <input
            type="text"
            className={styles.addInput}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className={styles.addBtn}>Add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.protoTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool
};
export default TodoForm;
