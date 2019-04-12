import React from "react";

import UserList from "./UserList";
import Navigation from "./Navigation";
import Notification from "./Notification";
import { css } from "glamor";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "./environment";
import { commitMutation } from "react-relay";
import classnames from "classnames";
import { isNil } from "ramda";
import { Link } from "react-router-dom";

const container = css({
  width: "60%",
  margin: "0 auto",
  height: 500,
  textAlign: "center",
  border: "2px solid black",
  backgroundColor: "#5F9EA0",
  padding: 5
});

const titleStyle = css({
  color: "white",
  padding: 20,
  fontSize: "2em",
  fontWeight: "bold"
});
const editFieldStyle = css({
  backgroundColor: "#E9967A",
  height: 100,
  border: "2px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center"
});
const flexContainerStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly"
});

const editInfoStyle = css({
  maxWidth: "110px",
  minWidth: "110px"
});

const footerStyle = css({
  position: "absolute",
  bottom: 0,
  width: "100%",
  backgroundColor: "#B0C4DE"
});
const buttonStyle = css({
  color: "white"
});

class EditUser extends React.Component {
  state = {
    successfullyUpdated: false,
    username: "",
    email: "",
    password: ""
  };

  handleUsernameInput = event => {
    this.setState({ username: event.target.value });
  };
  handleEmailInput = event => {
    this.setState({ email: event.target.value });
  };
  handlePasswordInput = event => {
    this.setState({ password: event.target.value });
  };

  createVariables = () => {
    const { username, email, password } = this.state;
    const newerUser = {};
    if (username === "" && password === "" && email === "") {
      return;
    }
    if (username !== "") {
      newerUser.username = username;
    }
    if (email !== "") {
      newerUser.email = email;
    }
    if (password !== "") {
      newerUser.password = password;
    }

    return { newerUser };
  };
  handleEdit = id => () => {
    const variables = this.createVariables();
    if (isNil(variables)) {
      return;
    }
    variables.userId = id;
    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: this.onCompleted,
      onError: this.onError
    });
  };
  onCompleted = data => {
    console.log("Success!", data.updateUser.user_id);
    this.setState({ successfullyUpdated: true });
    // setTimeout(function() {
    //   this.setState({ successfullyUpdated: false });
    // }, 3000);
  };
  onError = error => {
    console.warn(error);
  };
  handleGoBack = () => {
    this.props.history.goBack();
  };

  render() {
    const userId = this.props.location.state.userId;
    return [
      <div key="header">
        <Navigation />
      </div>,
      <div key="body" className={container}>
        <h1 className={titleStyle}>Edit User</h1>
        <QueryRenderer
          environment={environment}
          query={query}
          variables={{
            user_id: userId
          }}
          render={({ error, props }) => {
            console.log("QueryProps", props);
            if (error) {
              console.log("error", error);
              return <div>{error.message}</div>;
            } else if (props) {
              return [
                this.state.successfullyUpdated && (
                  <Notification username={props.user.username} />
                ),

                <div className={flexContainerStyle}>
                  <div className={editFieldStyle}>
                    <div className={editInfoStyle}>{props.user.username} </div>
                    <div>
                      <input
                        className="input"
                        type="username"
                        placeholder={props.user.username}
                        onChange={this.handleUsernameInput}
                      />
                    </div>
                  </div>
                  <div className={editFieldStyle}>
                    <div className={editInfoStyle}>{props.user.email}</div>
                    <div>
                      <input
                        className="input"
                        type="email"
                        placeholder={props.user.email}
                        onChange={this.handleEmailInput}
                      />
                    </div>
                  </div>
                  <div className={editFieldStyle}>
                    <div className={editInfoStyle}> Change Password </div>
                    <div>
                      <input
                        className="input"
                        type="password"
                        placeholder="password"
                        onChange={this.handlePasswordInput}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      className="button is-success"
                      onClick={this.handleEdit(userId)}
                    >
                      Update User
                    </button>
                  </div>
                </div>
              ];
            }
            return <div>Loading</div>;
          }}
        />
      </div>,
      <div key="footer" className={footerStyle}>
        <button className="button is-link" onClick={this.handleGoBack}>
          Go Back
        </button>
      </div>
    ];
  }
}
const query = graphql`
  query EditUserQuery($user_id: String) {
    user(userId: $user_id) {
      username
      email
    }
  }
`;

const mutation = graphql`
  mutation EditUserMutation($userId: String!, $newerUser: RegistrationInput) {
    updateUser(userId: $userId, payload: $newerUser) {
      user_id
    }
  }
`;

export default EditUser;
