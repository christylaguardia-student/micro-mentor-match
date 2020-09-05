import React from "react";
import { Link } from 'react-router-dom';

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import Hero from "../Hero";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0),
  },
  container: {
    padding: theme.spacing(4, 0),
    textAlign: 'center',
  }
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm" className={classes.container}>
        <Hero
          title="Micro-mentorships"
          subtitle="Get matched to a mentor for a short term and skill focused mentorships. Join to be a mentor based on skills you have to offer."
        />
        <div className={classes.container}>
          <Button component={Link} to="/signup" variant="contained" color="primary" size="large" >
            Signup
          </Button>
        </div>
      </Container>
    </div>
  );
};
