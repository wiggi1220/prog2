import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bulma/css/bulma.css";
import App from "./App";
import Login from "./Login";
import EditUser from "./EditUser";
import Register from "./Register";
import { BrowserRouter as Router, Route } from "react-router-dom";

const routing = (
  <Router>
    <Route exact path="/" component={Login} />
    <Route exact path="/register" component={Register} />

    <Route exact path="/home" component={App} />
    <Route exact path="/home/edit" component={EditUser} />
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
