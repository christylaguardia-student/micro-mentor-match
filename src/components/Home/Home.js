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
        subtitle="Get matched to a mentor for a short term and skill focused mentorships. Join to be a mentor based on skills you have to offer."
      />
      <Signup />
    </Container>
  );
};
