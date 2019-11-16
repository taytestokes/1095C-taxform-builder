import React, { Component } from "react";

class Dropzone extends Component {
  render() {
    return (
      <div style={styles}>
        <img
          alt="upload"
          className="Icon"
          src="baseline-cloud_upload-24px.svg"
        />
        <span>Upload Files</span>
      </div>
    );
  }
}

const styles = {
  height: "200px",
  width: "200px",
  backgroundColor: "#fff",
  border: "2px dashed rgb(187, 186, 186)",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  fontSize: 16
};

export default Dropzone;
