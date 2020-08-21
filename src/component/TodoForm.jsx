import React, { useState } from "react";
import PropTypes from "prop-types";

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
      <section className="add">
        <form action="" className="add-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="add-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="add-btn main-black-color">Add</button>
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
