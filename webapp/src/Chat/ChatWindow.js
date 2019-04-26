import React from "react";
import { css } from "glamor";

const chatWindowStyle = css({
  gridColumnStart: 2,
  gridRowStart: "ChatHeader-end",
  gridRowEnd: "ChatBody-end"
});

export default class ChatWindow extends React.Component {
  render() {
    return <div className={chatWindowStyle}>Empty Chatfield</div>;
  }
}
