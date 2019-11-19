import React, { Component } from "react";
import "./Uploader.css";
import { css } from "glamor";

// Components
import Dropzone from "./Dropzone";
import ProgressBar from "./Progress";

// Theme
import theme from "../Constants/Theme";

class Uploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      uploading: false,
      uploadProgress: {},
      successfullUploaded: false,
      step: 1
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

  _selectStepOne = () => {
    this.setState({
      step: 1
    });
  };

  _selectStepTwo = () => {
    this.setState({
      step: 2
    });
  };

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.uploader}>
        <div style={styles.stepper}>
          <div className={css(styles.stepOne)} onClick={this._selectStepOne}>
            <div style={styles.stepCircle}>1</div>
            <p style={styles.stepText}>Select desired files to upload</p>
          </div>
          <div className={css(styles.stepTwo)} onClick={this._selectStepTwo}>
            <div style={styles.stepCircle}>2</div>
            <p style={styles.stepText}>Save uploaded files to your documents</p>
          </div>
        </div>
        {this.state.step === 1 ? (
          <Dropzone
            onFilesAdded={this.onFilesAdded}
            disabled={this.state.uploading || this.state.successfullUploaded}
          />
        ) : (
          <div style={styles.uploadedFiles}>
            {this.state.files.map(file => (
              <div key={file.name} className="Row">
                <span className="Filename">{file.name}</span>
                {this.renderProgress(file)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  getStyles = () => ({
    uploader: {
      width: "90%",
      height: "90%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: theme.BorderRadius.MEDIUM
    },
    stepper: {
      width: "90%",
      height: "15%",
      display: "flex",
      alignItems: "center",
      marginBottom: theme.Spacing.XLARGE
    },
    stepOne: {
      width: "50%",
      height: "100%",
      borderBottom:
        this.state.step === 1 ? "3px solid black" : "3px solid #CCC",
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      ":hover": {
        cursor: "pointer",
        borderBottom: "3px solid black"
      }
    },
    stepTwo: {
      width: "50%",
      height: "100%",
      borderBottom:
        this.state.step === 2 ? "3px solid black" : "3px solid #CCC",
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      ":hover": {
        cursor: "pointer",
        borderBottom: "3px solid black"
      }
    },
    stepCircle: {
      height: "50px",
      width: "50px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      borderRadius: theme.BorderRadius.CIRCLE,
      border: "2px dashed #CCC",
      fontWeight: "bold",
      marginLeft: theme.Spacing.SMALL
    },
    stepText: {
      marginLeft: theme.Spacing.XLARGE,
      maxWidth: "35%",
      lineHeight: 1.2
    },
    uploadedFiles: {
      width: "80%",
      height: "65%"
    }
  });
}

export default Uploader;
