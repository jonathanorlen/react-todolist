import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import { ThemeProvider } from "emotion-theming";

import TodoList from "./page/TodoListClass";
import About from "./page/About";

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "#e86262"
    }
  },
  background: {
    color: {
      primary: "#f2eecb"
    }
  }
};
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
