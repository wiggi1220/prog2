import React from "react";
import { css } from "glamor";
import { FaBeer } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const addAvatarStyle = css({
  alignSelf: "flex-end",
  display: "flex",
  flexDirection: "row",
  height: "100%",
  width: "30%",
  "& button": {
    width: "70px",
    height: 25,
    marginBottom: 5
  }
});
const iconStyle = css({
  display: "flex",
  alignItems: "center"
});
const sendFileButtonStyle = css({
  display: "none"
});

const fileUpload = (file, userId) => {
  const formData = new FormData();
  formData.append("file", file);

  return fetch(`http://0.0.0.0:3000/api/users/${userId}/avatar`, {
    method: "POST",
    headers: {
      Authorization: sessionStorage.getItem("access_token")
    },
    body: formData
  }).then(response => {
    console.log("response", response);
    return null;
  });
};

export default class UploadAvatar extends React.Component {
  constructor(props) {
    console.log("props", props);
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      file: null
    };
  }
  chooseFile = () => {
    this.inputRef.current.click();
  };
  onChange = e => {
    console.log("my file ", e.target.files[0]);

    this.setState({ file: e.target.files[0] });
  };

  onFormSubmit = e => {
    e.preventDefault();
    fileUpload(this.state.file, this.props.userId);
  };

  render() {
    return (
      <div className={addAvatarStyle}>
        <IconContext.Provider value={{ size: "2em" }}>
          <div className={iconStyle}>
            <Link
              to={{
                pathname: "/home/edit",
                state: { userId: this.props.userId }
              }}
            >
              <FaBeer />
            </Link>
          </div>
        </IconContext.Provider>
        <form onSubmit={this.onFormSubmit}>
          <input
            hidden="hidden"
            ref={this.inputRef}
            type="file"
            id="real-file"
            onChange={this.onChange}
          />
          <button
            className="button is-dark button is-small"
            onClick={this.chooseFile}
          >
            Choose File
          </button>
          <button className="button is-dark button is-small" type="submit">
            Upload
          </button>
        </form>
      </div>
    );
  }
}
