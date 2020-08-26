import { css } from "@emotion/core";

export const add = () => {
  return css`
    padding: 16px;
  `;
};

export const addForm = () =>
  css`
    display: flex;
    align-items: flex-start;
  `;

export const addInput = ({ theme }) =>
  css`
    width: 100%;
    background: unset;
    border: unset;
    padding: 0px 64px;
    border-bottom: 1px solid ${theme.color.primary.red};
    outline: unset;
    font-family: "Homemade Apple", sans-serif;
    font-size: 16px;
    text-transform: lowercase;
  `;

// export const addBtn = ({ theme }) =>
//   css`
//     font-size: 1.8 rem;
//     font-family: "Bungee", sans-serif;
//     padding: 16px;
//     padding-right: unset;
//     cursor: pointer;
//     background: unset;
//     outline: unset;
//     border: unset;
//     &:active {
//       text-shadow: 1px 2px 1px ${theme.color.primary.black};
//     }
//   `;
