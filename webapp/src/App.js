import React from "react";

import UserList from "./UserList";
import Navigation from "./Navigation";
import { css } from "glamor";
import Footer from "./Footer";
import ChatHeader from "./Chat/ChatHeader";
import ChatWindow from "./Chat/ChatWindow";

const bodyStyle = css({
  display: "grid",
  gridTemplateColumns: "33% 67%",
  gridTemplateRows:
    "[nav-start] 50px [nav-end] 225px [ChatHeader-end] 775px [ChatBody-end] auto [Footer-end]"
});
class App extends React.Component {
  state = {
    selectedChatID: "",
    isChatSelected: false
  };
  handleSelectedChat = id => () => {
    this.setState({
      isChatSelected: true,
      selectedChatID: id
    });
  };

  render() {
    return (
      <div className={bodyStyle}>
        <Navigation />
        <UserList handleSelectedChat={this.handleSelectedChat} />
        {this.state.isChatSelected ? (
          <ChatHeader id={this.state.selectedChatID} />
        ) : null}
        {this.state.isChatSelected ? <ChatWindow /> : null}
        <Footer />
      </div>
    );
  }
}

export default App;
