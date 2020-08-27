import React from "react";

import Paper from "../component/Paper/PaperClass";
import Header from "../component/Header/HeaderClass";
import TodoForm from "../component/TodoForm/TodoFormClass";
import Todos from "../component/Todos/TodosClass";
import Container from "../layout/Container";

class TodoList extends React.Component {
  state = {
    todos: [
      {
        text: "Belajar React",
        isCompleted: false
      },
      {
        text: "Belajar Props DI React",
        isCompleted: false
      }
    ],
    showAdd: false
  };

  addTodos = (value) => {
    if (this.state.todos.length >= 10) {
      alert("Todos can't more than 10");
      return;
    }

    const addedTodo = [
      ...this.state.todos,
      { text: value, isCompleted: false }
    ];

    this.setState({
      todos: addedTodo
    });
  };

  clearTodos = () => {
    if (this.state.showAdd) {
      alert("finish todo before clear");
      return;
    }

    this.setState({
      todos: []
    });
  };

  completeTodo = (index) => {
    const addedTodo = [...this.state.todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    this.setState = {
      todos: addedTodo
    };
  };

  showAddToogle = () => {
    this.setState((prevState) => ({
      showAdd: !prevState.showAdd
    }));
  };

  render() {
    const { showAdd, todos } = this.state;
    return (
      <Paper>
        <Container direction="column" justify="space-beetwen" height="100">
          <Header
            align="flext-start"
            showAddToogle={this.showAddToogle}
            showAdd={showAdd}
            clearTodos={this.clearTodos}
          />
          <TodoForm addTodos={this.addTodos} showAdd={showAdd} />
          <Todos todos={todos} completeTodo={this.completeTodo} />
        </Container>
      </Paper>
    );
  }
}

export default TodoList;
