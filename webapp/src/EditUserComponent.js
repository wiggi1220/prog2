import React from "react";

import { css } from "glamor";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "./environment";
import deleteUserMutation from "./Mutations/DeleteUserMutation";

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

const buttonStyle = css({
  marginTop: 20,
  display: "flex",
  justifyContent: "space-between"
});

export default class EditUserComponent extends React.Component {
  constructor(props) {
    console.log("props", props);
    super(props);
    this.state = {
      showNotification: false,
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

  handleDelete = id => () => {
    deleteUserMutation(id, this.onError, this.onDeleteCompleted);
  };

  onDeleteCompleted = data => {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("currUser");

    console.log("User Successfully Deleted!", data.user_id);
    this.props.history.push("/");
  };
  onCompleted = data => {
    console.log("Success!", data.updateUser.user_id);
    this.setState({ showNotification: true });

    this.props.relay.refetch(null, null, null, { force: true });
  };
  onError = error => {
    console.warn(error);
  };

  renderNotification = name => {
    console.log("rendered");
    return (
      <div className="notification is-success">
        <button
          className="delete"
          onClick={() => this.setState({ showNotification: false })}
        />
        {`${name} wurde erfolgreich geupdatet!`}
      </div>
    );
  };
  render() {
    const { user } = this.props;
    return (
      <div className={flexContainerStyle}>
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
        <div className={buttonStyle}>
          <button
            className="button is-danger"
            onClick={this.handleDelete(user.id)}
          >
            Delete User
          </button>
          {this.state.showNotification &&
            this.renderNotification(user.username)}

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

//this could also go in mutations folder with own file, it stays here just to see both options
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
