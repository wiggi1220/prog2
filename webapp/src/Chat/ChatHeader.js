import React from "react";
import { css } from "glamor";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import AvatarImage from "../Bricks/AvatarImage";
import environment from "./../environment";

const chatHeaderStyle = css({
  gridColumnStart: 2,
  gridRowStart: "nav-end",
  gridRowEnd: "ChatHeader-end",
  border: "2px solid grey",
  boxShadow: "2px 1px grey",
  fontSize: 40,
  textAlign: "center"
});
// const avatarContainerStyle = css({
//   width: "30%",
//   margin: "auto 0"
// });

class ChatHeader extends React.Component {
  render() {
    const { username, avatar } = this.props.user;
    return (
      <div className={chatHeaderStyle}>
        <h1>Wanna have a conversation with {username}?</h1>
        <div>
          <AvatarImage avatar={avatar} />
        </div>
      </div>
    );
  }
}

export default variables => (
  <QueryRenderer
    environment={environment}
    query={query}
    variables={{
      user_id: variables.id
    }}
    render={({ error, props }) => {
      if (error) {
        console.log("error", error);
        return <div>{error.message}</div>;
      } else if (props) {
        return <ChatHeader user={props.user} />;
      }
      return <div>Loading</div>;
    }}
  />
);

const query = graphql`
  query ChatHeaderQuery($user_id: String) {
    user(userId: $user_id) {
      username
      avatar
    }
  }
`;
