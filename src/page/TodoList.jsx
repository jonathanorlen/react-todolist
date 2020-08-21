import React, { useState } from "react";

import Paper from "../component/Paper";
import Header from "../component/Header";
import TodoForm from "../component/TodoForm";
import Todos from "../component/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      text: "Belajar React",
      isCompleted: false
    },
    {
      text: "Belajar Props DI React",
      isCompleted: false
    }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodos = (value) => {
    if (todos.length >= 10) {
      alert("Todos can't more than 10");
      return;
    }
    const addedTodo = [...todos, { text: value, isCompleted: false }];

    setTodos(addedTodo);
  };

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };

  const clearTodos = () => setTodos([]);
  const showAddToogle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Header
        showAddToogle={showAddToogle}
        showAdd={showAdd}
        clearTodos={clearTodos}
      />
      <TodoForm addTodos={addTodos} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;
