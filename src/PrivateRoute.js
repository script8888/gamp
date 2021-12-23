import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./auth-context";

function PrivateRoute({ children, ...rest }) {
  const { loggedIn, loading } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <></>
        ) : loggedIn === true ? (
          children
        ) : (
          <Redirect to="/Login" />
        )
      }
    />
  );
}

export default PrivateRoute;
