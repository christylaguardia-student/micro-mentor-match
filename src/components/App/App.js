import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from 'recompose';

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from '@material-ui/core/styles';

import { withFirebase } from '../Firebase';
import { DrawerMenu } from "./DrawerMenu";
import { Navigation } from "./Navigation";
import { Views } from "./Views";

import theme from "./theme";

export const App = ({ firebase, isAuthenticated, user }) => {

  return (
    <React.Fragment>
      <CssBaseline />

      <Router>
        <header>
          <Navigation isAuthenticated={isAuthenticated} handleLogout={firebase.doSignOut} />
        </header>
        <DrawerMenu />
        <main>
          <ThemeProvider theme={theme}>
            <Views />
          </ThemeProvider>
        </main>
      </Router>

    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.user?.isAuthenticated,
  user: state.user,
});

export default compose(
  withFirebase,
  connect(mapStateToProps, null)
)(App);
