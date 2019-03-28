import React from "react";
import { css } from "glamor";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "./environment";
import defaultAvatar from "./assets/defaultAvatar.png";

const container = css({
  margin: "0 32px",
  padding: 8,
  border: "1px solid black",
  display: "flex",
  alignItems: "flex-start",
  overflow: "hidden",
  backgroundColor: "white"
});

const personalDataStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: 8,
  marginLeft: 16
});

const imageStyle = css({
  borderRadius: 100
});

class User extends React.Component {
  render() {
    const { email, username, avatar } = this.props.user;
    return (
      <div className={container}>
        <img
          className={imageStyle}
          height="50px"
          width="50px"
          src={defaultAvatar}
          alt="avatar"
        />

        <div className={personalDataStyle}>
          <div>{username}</div>
          <div>{email}</div>
        </div>
      </div>
    );
  }
}
export default props => (
  <QueryRenderer
    environment={environment}
    query={query}
    variables={{
      user_id: props.userId
    }}
    render={({ error, props }) => {
      if (error) {
        console.log("error", error);
        return <div>{error.message}</div>;
      } else if (props) {
        return <User user={props.user} />;
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
