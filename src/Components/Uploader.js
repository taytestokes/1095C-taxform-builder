import React, { Component } from "react";
import "./Uploader.css";

// Components
import Dropzone from "./Dropzone";
import ProgressBar from "./Progress";

class Uploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      uploading: false,
      uploadProgress: {},
      successfullUploaded: false
    };
  }

  onFilesAdded = files => {
    console.log(files);
    this.setState(prevState => ({
      files: prevState.files.concat(files)
    }));
  };

  renderProgress = file => {
    const uploadProgress = this.state.uploadProgress[file.name];
    console.log(uploadProgress);
    console.log("hit");
    // if uploading or successful return progress bar
    if (this.state.uploading || this.state.successfullUploaded) {
      return (
        <div className="ProgressWrapper">
          <ProgressBar
            progress={uploadProgress ? uploadProgress.percentage : 0}
          />
          <img
            className="CheckIcon"
            alt="done"
            src="https://img.icons8.com/cotton/2x/checkmark.png"
            style={{
              opacity:
                uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
            }}
          />
        </div>
      );
    }
  };

  renderActions = () => {
    if (this.state.successfullUploaded) {
      return (
        <button
          onClick={() =>
            this.setState({ files: [], successfullUploaded: false })
          }
        >
          Clear
        </button>
      );
    } else {
      return (
        <button
          disabled={this.state.files.length < 0 || this.state.uploading}
          onClick={this.uploadFiles}
        >
          Upload
        </button>
      );
    }
  };

  uploadFiles = async () => {
    this.setState({
      uploadProgress: {},
      uploading: true
    });

    const promises = [];
    this.state.files.forEach(file => {
      promises.push(this.sendRequest(file));
    });
    try {
      await Promise.all(promises);

      this.setState({
        successfullUploaded: true,
        uploading: false
      });
    } catch (event) {
      console.error(event);
      this.setState({ successfullUploaded: true, uploading: false });
    }
  };

  sendRequest = file => {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.upload.addEventListener("progress", event => {
        if (event.lengthComputable) {
          const copy = { ...this.state.uploadProgress };

          copy[file.name] = {
            state: "pending",
            percentage: (event.loaded / event.total) * 100
          };

          this.setState({
            uploadProgress: copy
          });
        }
      });

      req.upload.addEventListener("load", event => {
        const copy = { ...this.state.uploadProgress };

        copy[file.name] = { state: "done", percentage: 100 };

        this.setState({ uploadProgress: copy });
        resolve(req.response);
      });

      req.upload.addEventListener("error", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "error", percentage: 0 };
        this.setState({ uploadProgress: copy });
        reject(req.response);
      });

      const formData = new FormData();
      formData.append("file", file, file.name);

      req.open("POST", "/upload");
      req.send(formData);
    });
  };

  render() {
    return (
      <div className="Upload">
        <span className="Title">Upload Files</span>
        <div className="Content">
          <Dropzone
            onFilesAdded={this.onFilesAdded}
            disabled={this.state.uploading || this.state.successfullUploaded}
          />
          <div />
          <div className="Files">
            {this.state.files.map(file => (
              <div key={file.name} className="Row">
                <span className="Filename">{file.name}</span>
                {this.renderProgress(file)}
              </div>
            ))}
          </div>
        </div>
        <div className="Actions">{this.renderActions()}</div>
      </div>
    );
  }
}

export default Uploader;
