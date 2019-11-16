import React, { Component } from "react";
import "./Dropzone.css";

class Dropzone extends Component {
  constructor(props) {
    super(props);

    this.fileInputRef = React.createRef();

    this.state = {
      highlight: false
    };
  }

  // uses ref to select a hidden element to open file dialog
  openFileDialog = () => {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  };

  onFilesAdded = evt => {
    // check to see if dropzone is disabled
    if (this.props.disabled) return;
    // take the files  from the event
    const files = evt.target.files;
    // if method is available
    if (this.props.onFilesAdded) {
      // transform the file list to an array
      const array = this.fileListToArray(files);
      // execute onFilesAdded with array passed in
      this.props.onFilesAdded(array);
    }
  };

  fileListToArray = list => {
    const array = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  };

  onDragOver = evt => {
    evt.preventDefault();
    if (this.props.disabled) return;
    this.setState({ highlight: true });
  };

  onDragLeave = () => {
    this.setState({ highlight: false });
  };

  onDrop = evt => {
    evt.preventDefault();
    if (this.props.disabled) return;
    const files = evt.dataTransfer.files;
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files);
      this.props.onFilesAdded(array);
    }
    this.setState({ highlight: false });
  };

  render() {
    return (
      <div
        className={`Dropzone ${this.state.hightlight ? "Highlight" : ""}`}
        onClick={this.openFileDialog}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
        style={{ cursor: this.props.disabled ? "default" : "pointer" }}
      >
        <img
          alt="upload"
          className="Icon"
          src="https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/upload-128.png"
        />
        <input
          ref={this.fileInputRef}
          className="FileInput"
          type="file"
          multiple
          onChange={this.onFilesAdded}
        />
        <span>Upload Files</span>
      </div>
    );
  }
}

export default Dropzone;
