import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "./auth-context";

const PublicRoute = ({children, restricted, ...rest}) => {
    const { loggedIn, loading } = useAuth();
    return (
        <Route {...rest} render={props => (
            loading ? (
          <></>
        ) :
            loggedIn && restricted ?
                <Redirect to="/PPlans" />
            : children
        )} />
    );
};

export default PublicRoute;