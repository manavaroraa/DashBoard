
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
// import Tables from "views/examples/Tables";
import Tables from "views/examples/Tables";
 function isLoggedIn() {
  if (localStorage.getItem("user-info")) {
  return true
  }
  else
  return false
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {isLoggedIn()}
      <Route path="/admin" render={(props)=>isLoggedIn()?<AdminLayout {...props} />:<AuthLayout {...props} /> } />
      <Route path="/auth" render={(props) => isLoggedIn()?<AdminLayout {...props} />:<AuthLayout{...props} /> } />
      <Redirect from="/" to="/auth/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
