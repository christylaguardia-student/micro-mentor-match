import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import FirebaseContext from "../Firebase/context";
import Hero from "../Hero";
import { JoinForm } from "./JoinForm";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const Join = () => {
  const classes = useStyles();

  return (
    <>
      <Hero title="Sign up" />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <FirebaseContext.Consumer>
            {firebase => <JoinForm firebase={firebase} />}
          </FirebaseContext.Consumer>
        </div>
      </Container>
    </>
  );
};

export default Join;
