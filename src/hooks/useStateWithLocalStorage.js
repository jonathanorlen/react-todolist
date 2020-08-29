import React from "react";
import PropTypes from "prop-types";

const useStateWithLocalStorage = (localStorageKey) => {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || []
  );

  if (!localStorageKey) {
    throw new Error("You have to passed in a localstorage key as an argument");
  }

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos));
  }, [todos, localStorageKey]);
  return [todos, setTodos];
};

useStateWithLocalStorage.propsTypes = {
  localStorageKey: PropTypes.string.isRequired
};

export default useStateWithLocalStorage;