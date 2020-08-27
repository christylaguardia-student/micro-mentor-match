import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Navigation } from "./Navigation";
import { Routes } from "./Routes";

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

const App = (props) => {
  const classes = useStyles();

  return (
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
        <footer className={classes.footer}></footer>
      </Router>
    </React.Fragment>
  );
};

export default App;
