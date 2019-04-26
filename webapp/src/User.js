import React from "react";
import { css } from "glamor";
import { QueryRenderer } from "react-relay";
import { pathOr } from "ramda";
import graphql from "babel-plugin-relay/macro";
import environment from "./environment";
import UploadAvatar from "./UploadAvatar";
import AvatarImage from "./Bricks/AvatarImage";

const container = css({
  margin: "0 32px",
  padding: 8,
  border: "1px solid black",
  display: "flex",
  alignItems: "flex-start",
  overflow: "hidden",
  backgroundColor: "white",
  justifyContent: "space-around"
});
const avatarContainerStyle = css({
  width: "30%",
  margin: "auto 0"
});

const personalDataStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: 8,
  marginLeft: 16,
  width: "50%"
});

const addAvatarStyle = css({
  alignSelf: "flex-end",
  height: 50,
  width: "20%"
});

class User extends React.Component {
  render() {
    const { email, username, avatar } = pathOr(
      { username: "", email: "" },
      ["user"],
      this.props
    );
    const { userId, isLoggedIn, handleSelectedChat } = this.props;
    return (
      <div onClick={handleSelectedChat} className={container}>
        <div className={avatarContainerStyle}>
          <AvatarImage avatar={avatar} />
        </div>
        <div className={personalDataStyle}>
          <div>{username}</div>
          <div>{email}</div>
        </div>
        {isLoggedIn && <UploadAvatar userId={this.props.userId} />}
      </div>
    );
  }
}

export default variables => (
  <QueryRenderer
    environment={environment}
    query={query}
    variables={{
      user_id: variables.userId
    }}
    render={({ error, props }) => {
      if (error) {
        console.log("error", error);
        return <div>{error.message}</div>;
      } else if (props) {
        return (
          <User
            user={props.user}
            userId={variables.userId}
            isLoggedIn={variables.isLoggedIn}
            handleSelectedChat={variables.handleSelectedChat}
          />
        );
      }
      return <div>Loading</div>;
    }}
  />
);

const query = graphql`
  query UserQuery($user_id: String) {
    user(userId: $user_id) {
      username
      email
      avatar
    }
  }
`;
