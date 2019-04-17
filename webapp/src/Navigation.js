import React from "react";
import { css } from "glamor";
import { Link } from "react-router-dom";

const topBar = css({
  backgroundColor: "#B0C4DE",
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  height: "50px",
  paddingRight: 16,
  paddingTop: 7
});
const buttonStyle = css({
  color: "white"
});

export default class Navigation extends React.Component {
  handleLogout = () => {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("currUser");
  };

  render() {
    return (
      <nav className={topBar}>
        <button className="button is-danger" onClick={this.handleLogout}>
          <Link className={buttonStyle} to="/">
            Logout
          </Link>
        </button>
      </nav>
    );
  }
}
