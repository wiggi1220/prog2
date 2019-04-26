import React from "react";
import { css } from "glamor";

const footerStyle = css({
  backgroundColor: "#B0C4DE",
  gridColumnStart: 1,
  gridColumnEnd: 3,
  gridRowStart: "ChatBody-end",
  gridRowEnd: "Footer-end",
  bottom: 0
});

export default class Footer extends React.Component {
  handleGoBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div key="footer" className={footerStyle}>
        footer
      </div>
    );
  }
}
