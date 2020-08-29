import React from "react";
import { Link } from "react-router-dom";
import Paper from "../component/Paper/Paper";
import Container from "../layout/Container";

import AboutContent from "../component/AboutContent/AboutContent";

const About = () => {
  return (
    <Paper>
      <Container direction="column" justify="space-between">
        <AboutContent />
      </Container>
    </Paper>
  );
};

export default About;
