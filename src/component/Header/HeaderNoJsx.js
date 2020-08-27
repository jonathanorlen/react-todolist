/** @jsx jsx **/
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import PropTypes from "prop-types";

// import styles from "./header.module.css";
import * as styles from "./header.styles";
import Button from "../Button/ButtonNoJsx";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

const Header = ({ showAddToogle, showAdd, clearTodos }) => {
  const theme = useTheme();
  return jsx(
    "section",
    {
      className: "header-component"
    },
    jsx(
      Container,
      {
        align: "flex-start"
      },
      jsx(
        //Item pertama
        Item,
        {
          flex: "1"
        },
        jsx(Button, {
          text: showAdd ? "Add" : "Finish",
          onClick: showAddToogle,
          align: "left"
        })
      ),
      jsx(
        Item,
        {
          flex: 2
        },
        jsx(
          "h1",
          {
            css: styles.headerTitle(theme)
          },
          "To Do List"
        )
      ),
      jsx(
        Item,
        { flex: 1, align: "center" },
        jsx(Button, {
          text: "Clear",
          onClick: clearTodos,
          color: "red",
          align: "right"
        })
      )
    )
  );
};

Header.propTypes = {
  showAddToogle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default Header;
