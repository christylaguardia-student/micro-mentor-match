import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Signup from "../Signup";
import Search from "../Search";

export const ROUTES = {
  HOME: "/",
  SIGNUP: "/signup",
  SEARCH: "/search",
};

export const Routes = () => (
  <Switch>
    <Route exact path={ROUTES.HOME}>
      <Home />
    </Route>
    <Route path={ROUTES.SIGNUP}>
      <Signup />
    </Route>
    <Route path={ROUTES.SEARCH}>
      <Search />
    </Route>
  </Switch>
);
