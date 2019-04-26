import React from "react";
import { css } from "glamor";
import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "./environment";

const container = css({
  width: 400,
  height: 370,
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
  paddingRight: 68,
  marginTop: 40
});

export default class Register extends React.Component {
  state = {
    username: "",
    password: "",
    email: ""
  };

  handleUserInput = event => {
    this.setState({ username: event.target.value });
  };
  handleEmailInput = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordInput = event => {
    this.setState({ password: event.target.value });
  };

  createVariables = () => {
    const { username, password, email } = this.state;
    if (username === "" || password === "" || email === "") {
      return;
    }
    const newUser = {};

    newUser.username = username;
    newUser.email = email;
    newUser.password = password;

    return { newUser };
  };

  handleRegister = () => {
    const variables = this.createVariables();
    if (!variables) {
      return;
    }
    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: this.onCompleted,
      onError: this.onError
    });
  };

  onCompleted = data => {
    if (!data.registerUser.access_token) {
      console.warn("something went wrong");
      return;
    }
    this.props.history.push("/");
  };

  onError = error => {
    console.warn(error);
  };

  onKeyDown = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.handleRegister();
    }
  };

  render() {
    return (
      <div className={container}>
        <h1 className={pageTitle}>Register</h1>
        <div className={inputStyle}>
          <input
            className="input"
            type="text"
            placeholder="enter username"
            onChange={this.handleUserInput}
          />
        </div>
        <div className={inputStyle}>
          <input
            className="input"
            type="email"
            placeholder="enter email"
            onChange={this.handleEmailInput}
          />
        </div>
        <div className={inputStyle}>
          <input
            className="input"
            type="password"
            placeholder="enter password"
            onChange={this.handlePasswordInput}
            onKeyDown={this.onKeyDown}
          />
        </div>
        <div className={buttonStyle}>
          <button className="button is-success" onClick={this.handleRegister}>
            Register
          </button>
        </div>{" "}
      </div>
    );
  }
}
const mutation = graphql`
  mutation RegisterMutation($newUser: RegistrationInput) {
    registerUser(newUser: $newUser) {
      access_token
    }
  }
`;
