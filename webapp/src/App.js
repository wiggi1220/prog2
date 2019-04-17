import React from "react";

import UserList from "./UserList";
import Navigation from "./Navigation";
import { css } from "glamor";

const bodyStyle = css({
  display: "grid",
  gridTemplateColumns: "[ChatList] 33% [Chat] 66%"
});
class App extends React.Component {
  render() {
    return [
      <div key="header">
        <Navigation />
      </div>,
      <div key="body">
        <UserList />
      </div>,
      <div key="footer">footer</div>
    ];
  }
}

export default App;
