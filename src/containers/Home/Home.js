import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Hero from "../../components/Hero";
import { ROUTES } from "../App/Routes";

const useStyles = makeStyles((theme) => ({
  buttons: {
    marginTop: theme.spacing(4),
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Hero
        title="Micro-mentorships"
        subtitle="Get matched to one, or possibly many subject matter experts for a short term and skill-specific mentorships. Signup to be a mentor based on skills you have to offer."
      />
      <Container maxWidth="sm">
        <div className={classes.buttons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={ROUTES.SEARCH}
              >
                Find a mentor
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={ROUTES.SEARCH}
              >
                Be a mentor
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};
