import React from "react";
import { withTheme } from "emotion-theming";
import PropTypes from "prop-types";

import styled from "@emotion/styled";
import Container from "../../layout/Container";
import Button from "../Button/Button";
import Item from "../../layout/Item";

const StyledInput = styled.input`
  width: 100%;
  background: unset;
  border: unset;
  padding: 0px 64px;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.red};
  outline: unset;
  font-family: "Homemade Apple", sans-serif;
  font-size: 16px;
  text-transform: lowercase;
`;

class TodoForm extends React.Component {
  state = {
    value: ""
  };

  handleFormSubmit = (e) => {
    const { addTodos } = this.props;
    const { value } = this.state;
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
    this.setState({
      value: ""
    });
  };

  handleOnChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { showAdd, theme } = this.props;
    if (!showAdd) {
      return (
        <section className="todo-form-component">
          <form onSubmit={this.handleFormSubmit}>
            <Container align="flex-start">
              <Item flex={1} padding="0 0 0 16px">
                <StyledInput
                  type="text"
                  theme={theme}
                  value={this.state.value}
                  onChange={this.handleOnChange}
                />
              </Item>
              <Item>
                <Button text="add" />
                {/* <button css={styles.addBtn({ theme })}>Add</button> */}
              </Item>
            </Container>
          </form>
        </section>
      );
    } else {
      return null;
    }
  }

  static protoTypes = {
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.bool
  };
}

export default withTheme(TodoForm);
