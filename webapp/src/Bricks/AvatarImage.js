import React from "react";
import { css } from "glamor";
import defaultAvatar from "./../assets/defaultAvatar.png";

const imageStyle = css({
  borderRadius: 50,
  height: 50,
  width: 50
});

export default class AvatarImage extends React.Component {
  render() {
    return (
      <img
        className={imageStyle}
        src={this.props.avatar || defaultAvatar}
        alt="avatar"
      />
    );
  }
}
