import React from "react";

import Container from "@material-ui/core/Container";
// import { makeStyles } from "@material-ui/core/styles";

import Hero from "../Hero";
import Signup from './Signup';

// const useStyles = makeStyles((theme) => ({
// }));

export const Home = () => {
  // const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Hero
        title="Micro-mentorships"
        subtitle="Get matched to one, or possibly many subject matter experts for a short term and skill-specific mentorships. Join to be a mentor based on skills you have to offer."
      />
      <Signup />
    </Container>
  );
};
