import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { compose } from 'recompose';

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from '@material-ui/core/styles';

import Navigation from "./Navigation";
import Views from "./Views";
import SnackbarErrors from "./SnackbarErrors";

import { loginSuccess } from '../../store/actions';
import { withFirebase } from '../Firebase';

import theme from "./theme";

export const App = ({ firebase, user }) => {
  React.useEffect(() => {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? loginSuccess({ authUser })
        : loginSuccess({ authUser: null });
    });
  })

  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <header>
          <Navigation handleLogout={firebase.doSignOut} />
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

export default compose(
  withFirebase,
)(App);
