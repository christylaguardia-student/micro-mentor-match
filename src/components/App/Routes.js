import React from "react";
import { Switch, Route } from "react-router-dom";

import { withAuthentication } from '../Session';
import Home from "../Home";
import Profile from "../Profile";
import Login from "../Login/Login";
import Search from "../Search";

export const ROUTES = {
  HOME: "/", // aka "Join"
  LOGIN: "/login",
  LOGOUT: "/logout",
  PROFILE: "/profile",
  SEARCH: "/search",
};

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
// const PrivateRoute = ({ isAuthenticated, children, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         isAuthenticated ? (
//           children
//         ) : (
//             <Redirect
//               to={{
//                 pathname: ROUTES.LOGIN,
//                 state: { from: location }
//               }}
//             />
//           )
//       }
//     />
//   );
// }

// TODO: setup auth redirects
// export const Routes = ({ isAuthenticated }) => (
export const Routes = () => (
  <Switch>
    <Route exact path={ROUTES.HOME}>
      <Home />
    </Route>
    <Route path={ROUTES.LOGIN}>
      <Login />
    </Route>
    {/* TODO: Private routes */}
    <Route path={ROUTES.PROFILE}>
      <Profile />
    </Route>
    <Route path={ROUTES.SEARCH}>
      <Search />
    </Route>
  </Switch>
);

export default withAuthentication(Routes);

