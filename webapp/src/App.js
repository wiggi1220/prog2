import React from "react";

import UserList from "./UserList";
import Navigation from "./Navigation";
import { css } from "glamor";

class App extends React.Component {
  render() {
    console.log("currUser", this.props.location.state);
    const { currUser } = this.props.location.state;

    return [
      <div key="header">
        <Navigation />
      </div>,
      <div key="body">
        <UserList currUser={currUser} />
      </div>,
      <div key="footer">footer</div>
    ];
  }
}

export default App;
