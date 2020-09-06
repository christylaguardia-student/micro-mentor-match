import React from "react";
import { connect } from "react-redux";
import { Link, Redirect, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MuiLink from '@material-ui/core/Link';

import Hero from '../../Hero';
import { signInSuccess, addError } from '../../../store/actions';
import { withFirebase } from '../../Firebase/context';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function SignIn({ firebase, history, isAuthenticated, handleSuccess, handleError }) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    email: 'christinelaguardia@gmail.com',
    password: '',
  });
  const { email, password } = state;

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    firebase.doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        handleSuccess({ authUser });
        history.push("/profile");
      })
      .catch(error => {
        handleError({ error });
      });
  }

  if (isAuthenticated) {
    return <Redirect to='/profile' />;
  }

  return (
    <div className={classes.root}>
      <Hero subtitle="Sign In" />
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
            Sign In
          </Button>

          <Grid container className={classes.helpContainer}>
            <Grid item xs>
              <MuiLink component={Link} to="/reset-password" variant="body2">
                Forgot password?
              </MuiLink>
            </Grid>
            <Grid item>
              <MuiLink component={Link} to="/sign-up" variant="body2">
                {"Don't have an account? Sign Up"}
              </MuiLink>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.user?.isAuthenticated,
});

const mapDispatchToProps = {
  handleSuccess: signInSuccess,
  handleError: addError
}

export default compose(
  withRouter,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(SignIn);
