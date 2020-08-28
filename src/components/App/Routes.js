import React from "react";
import { Switch, Route } from "react-router-dom";

import { withAuthentication } from '../Session';
import Home from "../Home";
import LoginForm from "../Login/LoginForm"; // todo: remove useless container
import Join from "../Join/JoinForm"; // todo: remove useless container
import Search from "../Search/Search"; // todo: remove useless container

// these are nav routes
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  LOGOUT: "/logout",
  JOIN: "/join",
  SEARCH: "/search",
};

export const Routes = ({ isAuthenticated }) => (
  <Switch>
    <Route exact path={ROUTES.HOME}>
      <Home />
    </Route>
    {isAuthenticated ? (
      <Route path={ROUTES.JOIN}>
        <Join />
      </Route>
    ) : (
        <Route path={ROUTES.LOGIN}>
          <LoginForm />
        </Route>
      )}
    <Route path={ROUTES.SEARCH}>
      <Search />
    </Route>
  </Switch>
);

export default withAuthentication(Routes);

