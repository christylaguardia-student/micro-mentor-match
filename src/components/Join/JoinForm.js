import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

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

export const JoinForm = ({ firebase }) => {
  const classes = useStyles();
  const INITIAL_STATE = {
    email: '',
    password: '',
  };
  const [email, setEmail] = useState(INITIAL_STATE.email);
  const [password, setPassword] = useState(INITIAL_STATE.passwordOne);

  const handleSubmit = () => {
    console.log({ email, password })
    firebase.doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        console.log(authUser)
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
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
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
            autoComplete="password"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox value="allowExtraEmails" color="primary" />
            }
            label="I agree to some terms and conditions"
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
        Join
      </Button>
    </form>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.user?.isAuthenticated,
});

const mapDispatchToProps = null;

export default compose(
  withRouter,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(JoinForm);
