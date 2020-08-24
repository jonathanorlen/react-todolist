import { css } from "@emotion/core";

export const button = ({ color, align }) => {
  let textColor;

  switch (color) {
    case "black":
      textColor = "#484848";
      break;
    case "red":
      textColor = "#e86262";
      break;
    default:
      textColor = "484848";
  }

  return css`
    width: 24%;
    font-size: 1.8 rem;
    font-family: "Bungee", sans-serif;
    color: ${textColor};
    text-align: ${align};
    padding: 16px;
    background: unset;
    border: unset;
    outline: unset;
    cursor: pointer;
  `;
};
