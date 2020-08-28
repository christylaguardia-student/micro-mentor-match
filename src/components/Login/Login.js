import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import FirebaseContext from "../Firebase/context";
import { LoginForm } from "./LoginForm";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const Login = () => {
  const classes = useStyles();

  return (
    <>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          {/* this context might not be needed */}
          <FirebaseContext.Consumer>
            {firebase => <LoginForm firebase={firebase} />}
          </FirebaseContext.Consumer>
        </div>
      </Container>
    </>
  );
};
