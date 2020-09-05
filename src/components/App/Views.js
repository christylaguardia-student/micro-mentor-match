import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
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

export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest}
    render={props => isAuthenticated
      ? <Component {...props} />
      : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
    }
  />
);

export function Views({ isAuthenticated }) {
  const renderPlaceholderRoute = name => {
    return <Route key={name} path={`/${name}`} component={() => <Hero title={name} />} />
  };
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/reset-password" component={ResetPassword} />

        <PrivateRoute isAuthenticated={isAuthenticated} path="/profile" component={Profile} />
        <PrivateRoute isAuthenticated={isAuthenticated} path="/mentorships" component={Mentorships} />
        <PrivateRoute isAuthenticated={isAuthenticated} path="/mentors" component={Mentors} />
        <PrivateRoute isAuthenticated={isAuthenticated} path="/questions" component={Questions} />

        {["messages", "notifications", "chat", "help", "issue", "account"].map(name => renderPlaceholderRoute(name))}

        <Route component={() => renderPlaceholderRoute("uh oh!")} />
      </Switch>

      <FabMenu />
    </>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.user?.isAuthenticated,
});

export default compose(
  withRouter,
  connect(mapStateToProps, null)
)(Views);
