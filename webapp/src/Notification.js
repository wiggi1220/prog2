import React from "react";
import { css } from "glamor";

const notificationContainer = css({
  width: 200,
  height: 100,
  position: "absolute",
  top: 200,
  right: 50,
  backgroundColor: "green",
  textAlign: "center"
});
export default class Navigation extends React.Component {
  render() {
    const username = this.props.username;
    return (
      <div className={notificationContainer}>
        {username} wurde erfolgreich geupdatet!
      </div>
    );
  }
}
