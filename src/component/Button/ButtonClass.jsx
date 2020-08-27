import React from "react";
import PropTypes from "prop-types";
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";

const StyleButton = styled.button`
  width: 24%;
  font-size: 1.8 rem;
  font-family: "Bungee", sans-serif;
  color: ${(props) => props.textColor};
  text-align: ${(props) => props.align};
  padding: 16px;
  background: unset;
  border: unset;
  outline: unset;
  cursor: pointer;
`;

class Button extends React.Component {
  render() {
    const { text, onClick, color, align, theme } = this.props;
    const {
      color: { primary }
    } = theme;
    let textColor;

    switch (color) {
      case "black":
        textColor = primary.black;
        break;
      case "red":
        textColor = primary.red;
        break;
      default:
        textColor = primary.black;
    }

    return (
      <StyleButton textColor={textColor} align={align} onClick={onClick}>
        {text}
      </StyleButton>
    );
  }

  static defaultProps = {
    text: "Button",
    color: "Black",
    align: "left"
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["black", "red"]),
    align: PropTypes.oneOf(["left", "right"])
  };
}

export default withTheme(Button);
