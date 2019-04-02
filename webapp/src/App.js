import React from "react";

import UserList from "./UserList";
import Navigation from "./Navigation";
import { css } from "glamor";

const bodyStyle = css({
  paddingTop: 50
});

class App extends React.Component {
  render() {
    console.log("currUser", this.props.location.state);
    const { currUser } = this.props.location.state;

    return [
      <div key="header">
        <Navigation />
      </div>,
      <div key="body" className={bodyStyle}>
        <UserList currUser={currUser} />
      </div>,
      <div key="footer">footer</div>
    ];
  }
}

export default App;
