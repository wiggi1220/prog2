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
    user: "",
    password: ""
  };
  handleUserInput = event => {
    this.setState({ user: event.target.value });
  };
  handlePasswordInput = event => {
    this.setState({ password: event.target.value });
  };
  createVariables = () => {
    const { user, password } = this.state;
    if (user === "" || password === "") {
      return;
    }
    const loginData = {};
    if (user.match(/@/)) {
      loginData.email = user;
    } else {
      loginData.username = user;
    }
    loginData.password = password;
    console.log(loginData);
    return { loginData };
  };
  onCompleted = data => {
    if (!data.authentificateUser.access_token) {
      console.warn("Invalid Password you little tart");
      return;
    }
    sessionStorage.setItem(
      "access_token",
      data.authentificateUser.access_token
    );
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
          />
        </div>
        <div className={buttonStyle}>
          <button className="button is-success" onClick={this.handleLogin}>
            <Link to="/home">Sign In</Link>
          </button>
        </div>
      </div>
    );
  }
}

const mutation = graphql`
  mutation LoginMutation($loginData: AuthentificationInput) {
    authentificateUser(payload: $loginData) {
      access_token
    }
  }
`;
