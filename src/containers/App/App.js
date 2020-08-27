import React from 'react';
import { connect } from "react-redux";
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// eslint-disable-next-line no-unused-vars
import { firebaseApp, firebaseAppAuth, firebaseConfig } from '../../services/firebase/config';
import { login as loginAction, error as errorAction } from './actions';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Navigation } from './Navigation';
import { Routes } from './Routes';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

// firebaseAppAuth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
//   .then(function () {
//     var provider = new firebase.auth.GoogleAuthProvider();
//     // In memory persistence will be applied to the signed in Google user
//     // even though the persistence was set to 'none' and a page redirect
//     // occurred.
//     return firebase.auth().signInWithRedirect(provider);

//   })
//   .catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });

// firebaseAppAuth.signInWithCustomToken(token).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });

// console.log('firebaseAppAuth.getCredentialFromToken()', firebaseAppAuth.getCredentialFromToken())
console.log('current user', firebaseAppAuth.currentUser);
// firebaseAppAuth.currentUser.getIdToken()
//   .then((idToken) => {
//     console.log({ idToken })
//     // idToken can be passed back to server.
//   })
//   .catch((error) => {
//     // Error occurred.
//   });

const App = props => {
  const classes = useStyles();
  const { login, loading, user } = props;
  const isAuthenticated = user ? !!user?.credential?.idToken : false;

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  const uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        localStorage.setItem('micro-mentor-user', authResult)
        login({ authResult });
        return false;
      },
    },
    // Popup signin flow rather than redirect flow.
    // signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    // signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ]
  };

  return (
    // TODO: auth
    // <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

    <React.Fragment>
      <CssBaseline />
      <Router>
        <header>
          <Navigation />
        </header>
        <main>
          <div className={classes.content}>
            <Container maxWidth="sm">
              <Routes />
            </Container>
          </div>
        </main>
        <footer className={classes.footer}>
          {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography> */}
        </footer>
      </Router>
    </React.Fragment>
  );
}

export default connect(
  ({ loading, user }) => ({ loading, user }),
  { login: loginAction, error: errorAction },
)(App);
