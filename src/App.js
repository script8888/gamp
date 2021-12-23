import React from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./ScrollToTop";
import Login from "./Components/Login/Login.js";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import PPlans from "./Components/PPlans/PPlans";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <>
      <Router>
        <HelmetProvider>
          <ScrollToTop />
          <Switch>
            <PublicRoute restricted={true} exact path="/Login">
              <Helmet>
                <title>Login | GAMP</title>
              </Helmet>
              <Login />
            </PublicRoute>
            <PrivateRoute exact path="/PPlans">
              <Helmet>
                <title>Protection Plans | GAMP</title>
              </Helmet>
              <Nav />
              <PPlans />
            </PrivateRoute>
            <PublicRoute restricted={true} exact path="/">
              <Redirect to="/Login" />
            </PublicRoute>
          </Switch>
        </HelmetProvider>
      </Router>
    </>
  );
}

export default App;
