import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodos }) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      alert("No Blank todo!");
      return;
    }

    addTodos(value);
    setValue("");
  };

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
};

TodoForm.protoTypes = {
  addTodo: PropTypes.func.isRequired
};
export default TodoForm;
