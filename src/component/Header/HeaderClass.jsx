import React from "react";
import { withTheme } from "emotion-theming";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Button from "../Button/ButtonClass";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

const Styledh1 = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.color.primary.black};
  font-size: 3.6rem;
  font-family: "Homemade Apple", sans-serif;
  text-transform: lowercase;
`;

class Header extends React.Component {
  render() {
    const { showAddToogle, showAdd, clearTodos, theme } = this.props;
    return (
      <section className="header-component">
        <Container align={"flex-start"}>
          <Item flex={1}>
            <Button
              text={showAdd ? "Add" : "Finish"}
              onClick={showAddToogle}
              color="black"
              align={"left"}
            />
          </Item>
          <Item flex={2}>
            <Styledh1 theme={theme}>To Do List</Styledh1>
          </Item>
          <Item flex={1} align="center">
            <Button
              text={"clear"}
              onClick={clearTodos}
              color={"red"}
              align={"right"}
            />
          </Item>
        </Container>
      </section>
    );
  }

  static propTypes = {
    showAddToogle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired
  };
}

export default withTheme(Header);
