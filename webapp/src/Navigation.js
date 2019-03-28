import React from "react";
import UserList from "./UserList";
import { css } from "glamor";
import { Link } from "react-router-dom";

const topBar = css({
  backgroundColor: "#B0C4DE",
  width: "100%",
  height: "50px",
  display: "absolute"
});
const buttonStyle = css({
  display: "flex",
  justifyContent: "flex-end",
  paddingRight: 16,
  paddingTop: 7
});

export default class Navigation extends React.Component {
  handleLogout = () => {
    sessionStorage.removeItem("access_token");
  };

  render() {
    return (
      <nav className={topBar}>
        <div className={buttonStyle}>
          <button className="button is-success" onClick={this.handleLogout}>
            <Link to="/">Logout</Link>
          </button>
        </div>
      </nav>
    );
  }
}
