import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { loginSuccess, addError } from '../../store/actions';
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

export const Login = ({ firebase, isAuthenticated, handleSuccess, handleError }) => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    email: 'christinelaguardia@gmail.com',
    password: '',
  });
  const { email, password } = state;

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  if (isAuthenticated) {
    return <Redirect to='/search' />;
  }

  const handleSubmit = () => {
    firebase.doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        console.log(authUser)
        handleSuccess({ authUser });
      })
      .catch(error => {
        console.log({ error });
        handleError({ error });
      });
  }

  return (
    <Container maxWidth="sm">
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
              value={password}
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
          LogIn
      </Button>
      </form>
    </Container>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.user?.isAuthenticated,
});

const mapDispatchToProps = {
  handleSuccess: loginSuccess,
  handleError: addError
}

export default compose(
  withRouter,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(Login);
