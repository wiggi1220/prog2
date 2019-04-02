import React from "react";
import { css } from "glamor";
import { Link } from "react-router-dom";

const addAvatarStyle = css({
  alignSelf: "flex-end",
  height: 50,
  width: "20%"
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
      Authorization: sessionStorage.getItem("access_token"),
      "content-type": "multipart/form-data"
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

    this.state = {
      file: null
    };
  }

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
        <form onSubmit={this.onFormSubmit}>
          <h1>File Upload</h1>
          <input type="file" id="real-file" onChange={this.onChange} />
          <button type="submit">Upload</button>
        </form>
      </div>
    );
  }
}
