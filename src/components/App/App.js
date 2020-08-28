import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { AuthUserContext } from '../Session'
import { withFirebase } from '../Firebase';
import { Navigation } from "./Navigation";
import Routes from "./Routes";

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

export const App = ({ firebase }) => {
  const classes = useStyles();
  // TODO: this doesn't work
  // const [authUser, setAuthUser] = useState(null);
  // const isAuthenticated = !!authUser;

  // useEffect(() => {
  //   if (firebase) {
  //     firebase.auth.onAuthStateChanged(newAuthUser => {
  //       console.log('onAuthStateChanged...', newAuthUser)
  //       newAuthUser
  //         ? setAuthUser(newAuthUser)
  //         : setAuthUser(null);
  //     });
  //   }
  // })

  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <header>
          {/* <AuthUserContext.Provider value={authUser}> */}
          <Navigation />
          {/* </AuthUserContext.Provider> */}
        </header>
        <main>
          <div className={classes.content}>
            <Container maxWidth="sm">
              <Routes />
            </Container>
          </div>
        </main>
        <footer className={classes.footer}></footer>
      </Router>
    </React.Fragment>
  );
};


export default withFirebase(App);

