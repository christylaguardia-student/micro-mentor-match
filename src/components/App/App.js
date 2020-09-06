import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Redirect, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from '@material-ui/core/styles';

import Navigation from "./Navigation";
import Views from "./Views";
import SnackbarErrors from "./SnackbarErrors";

import { signInSuccess, addError } from '../../store/actions';
import { withFirebase } from '../Firebase';

import theme from "./theme";

export const App = ({ firebase, handleSuccess, handleError }) => {
  React.useEffect(() => {
    firebase.auth.onAuthStateChanged(authUser => {
      handleSuccess({ authUser: authUser ?? null });
    });
  })

  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <header>
          <Navigation handleSignOut={firebase.doSignOut} />
        </header>
        <main>
          <ThemeProvider theme={theme}>
            <Views />
            <SnackbarErrors />
          </ThemeProvider>
        </main>
      </Router>
    </React.Fragment>
  );
};

const mapDispatchToProps = {
  handleSuccess: signInSuccess,
  handleError: addError
}

export default compose(
  withFirebase,
  connect(null, mapDispatchToProps)
)(App);
