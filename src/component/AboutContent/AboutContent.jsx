/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

import * as styles from "./AboutContent.styles";

const AboutContent = () => {
  return (
    <section className="about-page">
      <Container direction="column">
        <Item align="center">
          <h1 css={styles.aboutPageHeader}>About This Page</h1>
          <h3 css={styles.aboutPageSubHeader}>What I Learn</h3>
        </Item>
        <Item>
          <Container>
            <p css={styles.aboutPagePragraph}>
              I learn use function component or class component, styling css in
              js, props, React router, hooks and how to make simple code, using
              local storage
            </p>
          </Container>
        </Item>
        <Item align="center">
          <Link to="/">
            <span css={styles.backToHome}>Back To Home</span>
          </Link>
        </Item>
      </Container>
    </section>
  );
};

export default AboutContent;
