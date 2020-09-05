import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { compose } from 'recompose';

import Hero from "../Hero";
import Home from "../Home";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import ResetPassword from "../Auth/ResetPassword";
import Profile from "../Profile";
import Mentorships from "../Mentorships";
import Mentors from "../Mentors";
import Questions from "../Questions";
import { FabMenu } from './FabMenu';

export function Views({ isAuthenticated }) {
  const renderPlaceholderRoute = name => {
    return <Route key={name} path={`/${name}`} component={() => <Hero title={name} />} />
  };

  if (isAuthenticated) {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/mentorships" component={Mentorships} />
          <Route path="/mentors" component={Mentors} />
          <Route path="/questions" component={Questions} />

          {["messages", "notifications", "chat", "help", "issue", "account"].map(name => renderPlaceholderRoute(name))}
        </Switch>

        <FabMenu />
      </>
    );
  }
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/reset-password" component={ResetPassword} />
      </Switch>
    </>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.user?.isAuthenticated,
});

export default compose(
  withRouter,
  connect(mapStateToProps, null)
)(Views);
