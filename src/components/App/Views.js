import React from 'react';
import { Switch, Route } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import Hero from "../Hero";
import Home from "../Home";
import Profile from "../Profile";
import Mentorships from "../Mentorships";
import Mentors from "../Mentors";
import Questions from "../Questions";
import { FabMenu } from './FabMenu';

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

export function Views() {
  const classes = useStyles();

  const renderPlaceholderRoute = name => {
    return <Route key={name} path={`/${name}`} component={() => <Hero title={name} />} />
  };

  return (
    <div className={classes.root}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/mentorships" component={Mentorships} />
        <Route path="/mentors" component={Mentors} />
        <Route path="/questions" component={Questions} />

        {["messages", "notifications", "chat", "help", "issue", "account"].map(name => renderPlaceholderRoute(name))}
      </Switch>

      <FabMenu />
    </div>
  );
}
