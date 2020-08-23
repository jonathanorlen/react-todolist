import React from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button";

const Header = ({ showAddToogle, showAdd, clearTodos }) => {
  return (
    <section className="header">
      <Button
        text={showAdd ? "Finish" : "Add"}
        onClick={showAddToogle}
        align={"left"}
      />
      <h1 className="header-title">To DO List</h1>
      <Button
        text={"clear"}
        onClick={clearTodos}
        color={"red"}
        align={"right"}
      />
    </section>
  );
};

Header.propTypes = {
  showAddToogle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};
export default Header;
