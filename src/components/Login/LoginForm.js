import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { loginSubmit, loginSuccess } from '../../store/actions';
import { withFirebase } from '../Firebase/context';

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const LoginForm = ({ firebase, isAuthenticated, loginSubmit, loginSuccess }) => {
  const classes = useStyles();
  // const isAuthenticated = user.isAuthenticated;
  // console.log({ isAuthenticated })

  const INITIAL_STATE = {
    email: 'christinelaguardia@gmail.com',
    password: 'password',
  };
  const [email, setEmail] = useState(INITIAL_STATE.email);
  const [password, setPassword] = useState(INITIAL_STATE.passwordOne);

  if (isAuthenticated) {
    return <Redirect to='/search' />;
  }

  const handleSubmit = () => {
    loginSubmit();

    firebase.doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        console.log(authUser)
        loginSuccess({ authUser });
      })
      .catch(error => {
        console.log({ error });
      });
  }

  return (
    <form
      className={classes.form}
      noValidate
      onSubmit={event => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            autoComplete="email"
            onChange={e => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            value={password}
            autoComplete="password"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        LogIn
      </Button>
    </form>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.user?.isAuthenticated,
});

const mapDispatchToProps = {
  loginSubmit,
  loginSuccess
}

export default compose(
  withRouter,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(LoginForm);
