import React from "react";
import { css } from "glamor";
import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "./environment";
import { Link } from "react-router-dom";

const container = css({
  width: 300,
  height: 270,
  borderRadius: 10,
  boxShadow: "1px 2px #B2B2B2",
  backgroundColor: "#D4EFFF",
  margin: "50px auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

const pageTitle = css({
  margin: 20,
  // bulma css overwrites default
  fontSize: "2em"
});

const inputStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: 8
});

const buttonStyle = css({
  width: "inherit",
  display: "flex",
  justifyContent: "flex-end",
  paddingRight: 16,
  marginTop: 16
});

export default class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };
  handleUserInput = event => {
    this.setState({ username: event.target.value });
  };
  handlePasswordInput = event => {
    this.setState({ password: event.target.value });
  };
  createVariables = () => {
    const { username, password } = this.state;
    if (username === "" || password === "") {
      return;
    }
    const loginData = {};
    if (username.match(/@/)) {
      loginData.email = username;
    } else {
      loginData.username = username;
    }
    loginData.password = password;
    return { loginData };
  };
  onCompleted = data => {
    if (!data.currUser.access_token) {
      console.warn("Invalid Password you little tart");
      return;
    }
    sessionStorage.setItem("access_token", data.currUser.access_token);
    sessionStorage.setItem("currUser", JSON.stringify(data.currUser));

    this.props.history.push("/home", { currUser: data.currUser });

    console.log("success", data);
  };
  onError = error => {
    console.warn(error);
  };

  handleLogin = () => {
    const variables = this.createVariables();
    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: this.onCompleted,
      onError: this.onError
    });
  };
  onKeyDown = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.handleLogin();
    }
  };

  render() {
    return (
      <div className={container}>
        <h1 className={pageTitle}>Login</h1>
        <div className={inputStyle}>
          <input
            className="input"
            type="text"
            placeholder="username or email"
            onChange={this.handleUserInput}
          />
        </div>
        <div className={inputStyle}>
          <input
            className="input"
            type="password"
            placeholder="password"
            onChange={this.handlePasswordInput}
            onKeyDown={this.onKeyDown}
          />
        </div>
        <div className={buttonStyle}>
          <button className="button is-success" onClick={this.handleLogin}>
            Sign In
          </button>
        </div>
      </div>
    );
  }
}

const mutation = graphql`
  mutation LoginMutation($loginData: AuthentificationInput) {
    currUser(payload: $loginData) {
      access_token
      id
      username
      avatar
      hasAvatar
      email
    }
  }
`;
