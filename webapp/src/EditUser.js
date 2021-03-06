import React from "react";

import UserList from "./UserList";
import Navigation from "./Navigation";
import EditUserComponent from "./EditUserComponent";

import { getCurrentUser } from "./helper/user";

import { css } from "glamor";
import { QueryRenderer, createRefetchContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "./environment";

import { Link } from "react-router-dom";
import { path } from "ramda";

const container = css({
  width: "60%",
  margin: "0 auto",
  marginTop: 50,
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

const buttonStyle = css({
  color: "white"
});

class EditUser extends React.Component {
  render() {
    const user = getCurrentUser();
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
            user_id: user.id
          }}
          render={({ error, props }) => {
            if (error || !path(["user"], props)) {
              console.log("error", error);
              return null;
            } else if (props) {
              return (
                <EditUserRefetchContainer
                  history={this.props.history}
                  user={props.user}
                />
              );
            }
            return <div>Loading</div>;
          }}
        />
      </div>
    ];
  }
}
const query = graphql`
  query EditUserComponentQuery($user_id: String!) {
    user(userId: $user_id) {
      ...EditUser_user
    }
  }
`;

const EditUserRefetchContainer = createRefetchContainer(
  EditUserComponent,
  {
    user: graphql`
      fragment EditUser_user on User {
        username
        email
        id
      }
    `
  },
  query
);

export default EditUser;
