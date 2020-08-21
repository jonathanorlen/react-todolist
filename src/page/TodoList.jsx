import React, { useState } from "react";

import Paper from "../component/Paper";
import Header from "../component/Header";
import TodoForm from "../component/TodoForm";
import Todos from "../component/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      text: "Belajar React"
    },
    {
      text: "Belajar Props DI React"
    },
    {
      text: "Belajar React Hooks"
    },
    {
      text: "Belajar State di react"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar Props DI React"
    }
  ]);
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
