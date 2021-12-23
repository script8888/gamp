import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { AuthProvider } from "./auth-context";
import App from "./App";

axios.defaults.baseURL = "https://gamp-server-staging.herokuapp.com/v1/";

ReactDOM.render(
  <AuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>,
  document.getElementById("root")
);
