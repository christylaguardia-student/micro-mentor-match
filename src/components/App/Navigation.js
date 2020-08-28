import React from "react";
import { Link } from 'react-router-dom';

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// TODO: import AuthUserContext from '../Session/context';
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

export const Navigation = ({ isAuthenticated, handleLogout }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Micro-Mentorships
          </Typography>
          <nav>
            {isAuthenticated ? (
              <Button className={classes.link} onClick={handleLogout}>Logout</Button>
            ) : (
                <NavigationButton name="Login" path={ROUTES.LOGIN} />
              )}
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
};
