import React from "react";
import { withTheme } from "emotion-theming";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { render } from "react-dom";

const StyledTodo = styled.div`
  position: relative;
  flex: 1 0 auto;
  text-align: center;
  max-height: 36px;
  margin: 16px 0 0;
  font-family: "Homemade Apple", sans-serif;
  font-size: 24px;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.red};
`;

const StyledTodoText = styled.span`
  width: 100%;
  height: 50px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  text-decoration: ${(props) =>
    props.isCompleted ? "line-through" : "initial"};
  color: ${(props) => props.theme.color.primary.black};
  cursor: pointer;
`;

class Todo extends React.Component {
  render() {
    const { text, completeTodo, index, isCompleted, theme } = this.props;
    return (
      <StyledTodo onClick={() => completeTodo(index)} theme={theme}>
        <StyledTodoText theme={theme} isCompleted={isCompleted}>
          {text}
        </StyledTodoText>
      </StyledTodo>
    );
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    completeTodo: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired
  };
}

export default withTheme(Todo);
