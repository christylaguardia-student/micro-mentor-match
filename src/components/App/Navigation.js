import React from "react";
import { connect } from "react-redux";
import { Redirect, Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { withFirebase } from '../Firebase/context';
import AuthUserContext from '../Session/context';
import { ROUTES } from "./Routes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "#fff",
    margin: theme.spacing(1, 1.5),
  },
}));

const NavigationButton = ({ name, path }) => {
  const classes = useStyles();

  return (
    <Button
      key={name}
      component={Link}
      to={path}
      className={classes.link}
    >
      {name}
    </Button>
  )
};

export const Navigation = ({ authUser }) => {
  const classes = useStyles();
  const isAuthenticated = !!authUser;

  const NAV_ROUTES = isAuthenticated
    ? [{ name: "Login", path: ROUTES.LOGIN }]
    : [{ name: "Join", path: ROUTES.JOIN }, { name: "Login", path: ROUTES.LOGIN }];

  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Micro-Mentorship
          </Typography>
          <nav>
            {isAuthenticated ? (
              <NavigationButton name="Logout" path={ROUTES.LOGOUT} />
            ) : (
                <NavigationButton name="Login" path={ROUTES.LOGIN} />
              )}
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.user?.isAuthenticated,
});

const mapDispatchToProps = null;

export default compose(
  withRouter,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(Navigation);
