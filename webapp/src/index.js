import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bulma/css/bulma.css";
import App from "./App";
import Login from "./Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

const routing = (
  <Router>
    <Route exact path="/" component={Login} />
    <Route path="/home" component={App} />
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
