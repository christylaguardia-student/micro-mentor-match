import React from "react";
import { connect } from "react-redux";
import { withRouter, useHistory } from 'react-router-dom';
import { compose } from 'recompose';

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { createUserSuccess, addError } from '../../store/actions';
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

export const Signup = ({ firebase, createUserSuccess, addError }) => {
  const classes = useStyles();
  let history = useHistory();

  const [state, setState] = React.useState({
    email: 'christinelaguardia@gmail.com',
    password: '',
  });
  const { email, password } = state;

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  // const handleCheckboxChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  const handleSubmit = () => {
    firebase.doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        console.log(authUser)
        createUserSuccess({ authUser });
        history.replace('/profile');
      })
      .catch(error => {
        console.log({ error });
        addError({ error });
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
            autoComplete="email"
            onChange={handleChange}
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
            onChange={handleChange}
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
        Sign up
      </Button>
    </form >
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.user?.isAuthenticated,
});

const mapDispatchToProps = {
  createUserSuccess,
  addError,
};

export default compose(
  withRouter,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(Signup);
