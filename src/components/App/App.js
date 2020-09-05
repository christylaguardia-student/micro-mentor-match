import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import { connect } from "react-redux";
import { compose } from 'recompose';

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from '@material-ui/core/styles';

import Navigation from "./Navigation";
import Views from "./Views";
import SnackbarErrors from "./SnackbarErrors";

import { loginSuccess, addError } from '../../store/actions';
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

// const mapStateToProps = state => ({
//   isAuthenticated: state.user?.isAuthenticated,
//   user: state.user,
// });

export default compose(
  withFirebase,
  // connect(mapStateToProps, null)
)(App);
