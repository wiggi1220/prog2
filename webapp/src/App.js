import React, { Component } from "react";

import UserList from "./UserList";
import Navigation from "./Navigation";
import { css } from "glamor";
import { Link } from "react-router-dom";

const topBar = css({
  backgroundColor: "red",
  width: "100%",
  height: "50px",
  display: "absolute"
});
const buttonStyle = css({
  width: "inherit",
  display: "flex",
  justifyContent: "flex-end",
  paddingRight: 16,
  marginTop: 16
});

const App = () => [<Navigation />, <UserList />];

export default App;
