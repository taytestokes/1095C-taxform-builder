import React, { Component } from "react";
import { css } from "glamor";
import * as Icon from "react-feather";
import swal from "@sweetalert/with-react";

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

  // Adds new file to the list of files on state
  onFilesAdded = files => {
    this.setState(prevState => ({
      files: prevState.files.concat(files),
      step: 2
    }));
  };

  _uploadFiles = async () => {
    this.setState({
      uploadProgress: {},
      uploading: true
    });

    const promises = [];
    this.state.files.forEach(file => {
      promises.push(this._sendRequest(file));
    });
    try {
      await Promise.all(promises);

      this.setState({
        successfullUploaded: true,
        uploading: false
      });
    } catch (event) {
      this.setState({ successfullUploaded: true, uploading: false });
    }
  };

  _sendRequest = file => {
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
    if (this.state.files.length > 9) {
      return;
    }
    this.setState({
      step: 1
    });
  };

  _selectStepTwo = () => {
    if (this.state.files.length < 1) {
      return swal({
        text: "Please select a file or files to upload before moving on.",
        button: "Got It"
      });
    }
    this.setState({
      step: 2
    });
  };

  _cancelUpload = () => {
    swal("Are you sure you want to cancel?", {
      buttons: {
        cancel: "Nevermind",
        confirm: {
          text: "Yes",
          value: "confirm"
        }
      }
    }).then(value => {
      switch (value) {
        case "confirm":
          this.setState({
            files: [],
            uploading: false,
            uploadProgress: {},
            successfullUploaded: false,
            step: 1
          });
          return;
        default:
          return;
      }
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
            <p style={styles.stepText}>Upload files to your documents</p>
          </div>
        </div>
        {this.state.step === 1 ? (
          <Dropzone
            onFilesAdded={this.onFilesAdded}
            disabled={this.state.uploading || this.state.successfullUploaded}
          />
        ) : (
          <>
            <div style={styles.uploadedFiles}>
              {this.state.files.map((file, index) => (
                <div key={`${file.name}-${index}`} style={styles.fileCard}>
                  <Icon.File size={30} />
                  <div style={styles.fileProgress}>
                    <div style={styles.fileInfo}>
                      <p>{file.name}</p>
                      <p>
                        {this.state.uploadProgress[file.name]
                          ? `${
                              this.state.uploadProgress[file.name].percentage
                            }%`
                          : `0%`}
                      </p>
                    </div>
                    <div style={styles.progressbar}>
                      <ProgressBar
                        progress={
                          this.state.uploadProgress[file.name]
                            ? this.state.uploadProgress[file.name].percentage
                            : 0
                        }
                      />
                    </div>
                  </div>
                  <Icon.CheckCircle
                    size={20}
                    style={
                      this.state.uploadProgress[file.name]
                        ? { color: theme.Colors.SUCCESS }
                        : { color: "#CCC" }
                    }
                  />
                </div>
              ))}
            </div>
            <div style={styles.uploadSubmit}>
              <button
                className={css(styles.cancelButton)}
                onClick={this._cancelUpload}
              >
                Cancel
              </button>
              <button
                className={css(styles.saveButton)}
                onClick={this._uploadFiles}
              >
                Upload
              </button>
            </div>
          </>
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
      marginBottom: theme.Spacing.XLARGE,
      borderRadius: "5px"
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
      width: "90%",
      height: "65%",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      overflow: "hidden",
      position: "relative"
    },
    fileCard: {
      width: "50%",
      height: "20%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: theme.Spacing.MEDIUM
    },
    fileProgress: {
      width: "85%",
      height: "45%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between"
    },
    fileInfo: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: theme.FontSizes.LARGE
    },
    progressbar: {
      width: "100%"
    },
    uploadSubmit: {
      height: "10%",
      width: "90%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center"
    },
    saveButton: {
      width: "100px",
      height: "35px",
      fontSize: theme.FontSizes.MEDIUM,
      backgroundColor: theme.Colors.PRIMARY,
      color: theme.FontColors.LIGHT,
      border: `1px solid ${theme.Colors.PRIMARY}`,
      borderRadius: theme.BorderRadius.SMALL,
      outline: "none",
      ":hover": {
        cursor: "pointer"
      }
    },
    cancelButton: {
      width: "100px",
      height: "35px",
      fontSize: theme.FontSizes.MEDIUM,
      backgroundColor: "transparent",
      color: "#BBB",
      border: `1px solid #BBB`,
      borderRadius: theme.BorderRadius.SMALL,
      marginRight: theme.Spacing.SMALL,
      outline: "none",
      ":hover": {
        cursor: "pointer"
      }
    }
  });
}

export default Uploader;
