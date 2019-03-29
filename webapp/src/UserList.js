import React from "react";
import { css } from "glamor";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { pathOr } from "ramda";
import environment from "./environment";
import User from "./User";

const container = css({
  width: "33%",
  height: 1000,
  textAlign: "center",
  border: "2px solid black",
  backgroundColor: "#5F9EA0",
  padding: 5
});
const title = css({
  color: "white",
  padding: 20,
  fontSize: "2em",
  fontWeight: "bold"
});

const query = graphql`
  query UserListQuery {
    userList {
      id
    }
  }
`;

export default class UserList extends React.Component {
  render() {
    return (
      <div className={container}>
        <h1 className={title}>Chats</h1>
        <QueryRenderer
          environment={environment}
          query={query}
          render={({ error, props }) => {
            if (error) {
              console.log("error", error);
              return <div>{error.message}</div>;
            } else if (props) {
              const data = pathOr([], ["userList"], props);
              return data.map(({ id }, index) => (
                <User userId={id} key={index} />
              ));
            }
            return <div>Loading</div>;
          }}
        />
      </div>
    );
  }
}
