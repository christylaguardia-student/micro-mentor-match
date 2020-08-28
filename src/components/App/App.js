import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from 'recompose';

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

import { withFirebase } from '../Firebase';
import { Navigation } from "./Navigation";
import Routes from "./Routes";

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export const App = ({ firebase, isAuthenticated, user }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <header>
          <Navigation isAuthenticated={isAuthenticated} handleLogout={firebase.doSignOut} />
        </header>
        <main>
          <div className={classes.content}>
            <Routes />
          </div>
        </main>
        <footer className={classes.footer}></footer>
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
