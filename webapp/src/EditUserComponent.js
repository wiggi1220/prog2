import React from "react";

import { css } from "glamor";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "./environment";
import { commitMutation } from "react-relay";
import { getCurrentUser } from "./helper/user";

import { isNil } from "ramda";

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

export default class EditUserComponent extends React.Component {
  constructor(props) {
    console.log("props", props);
    super(props);
    this.state = {
      successfullyUpdated: false,
      username: "",
      email: "",
      password: ""
    };
  }
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
    // this.setState({ successfullyUpdated: true });

    this.props.relay.refetch(null, null, null, { force: true });
  };
  onError = error => {
    console.warn(error);
  };

  render() {
    const { user } = this.props;
    return (
      <div className={flexContainerStyle}>
        {/* {this.state.successfullyUpdated && (
          <Notification username={user.username} />
        )} */}

        <div className={editFieldStyle}>
          <div className={editInfoStyle}>{user.username}</div>
          <div>
            <input
              className="input"
              type="username"
              placeholder={user.username}
              onChange={this.handleUsernameInput}
            />
          </div>
        </div>
        <div className={editFieldStyle}>
          <div className={editInfoStyle}>{user.email}</div>
          <div>
            <input
              className="input"
              type="email"
              placeholder={user.email}
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
            onClick={this.handleEdit(user.id)}
          >
            Update User
          </button>
        </div>
      </div>
    );
  }
}

const mutation = graphql`
  mutation EditUserComponentMutation(
    $userId: String!
    $newerUser: RegistrationInput
  ) {
    updateUser(userId: $userId, payload: $newerUser) {
      user_id
    }
  }
`;
