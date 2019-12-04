import React, { Component } from "react";
import { css } from "glamor";
import swal from "@sweetalert/with-react";
import * as Icon from "react-feather";

// Components
import Dropzone from "./Dropzone";
import UploadedFile from "./UploadedFile";

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
    const currentFilesLength = this.state.files.length;
    const fileAmountToCut = 5 - currentFilesLength;
    const incomingFiles = files.slice(0, fileAmountToCut);
    const updatedFileList = this.state.files.concat(incomingFiles);

    if (fileAmountToCut === 0) {
      return swal({
        text: "Only 5 files allowed to be uploaded.",
        button: "Okay"
      });
    }

    this.setState({
      files: updatedFileList,
      step: 2
    });
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

      req.open("POST", "/documents/upload");
      req.send(formData);
    }).then(() => {
      swal({
        text: "Files successfully uploaded!",
        button: "Okay"
      });

      this.setState({
        step: 1,
        files: [],
        uploading: false,
        uploadProgress: {},
        successfullUploaded: false
      });
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
        button: "Okay"
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

  _removeUpload = file => {
    const fileIndex = this.state.files.indexOf(file);

    if (fileIndex === -1) {
      return;
    }

    const updatedFiles = this.state.files.filter(
      (file, index) => index !== fileIndex
    );

    return this.setState(
      {
        files: updatedFiles
      },
      () => {
        if (this.state.files.length === 0) {
          this.setState({
            step: 1
          });
        }
      }
    );
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
              {this.state.files.map((file, index) => {
                return (
                  <UploadedFile
                    file={file}
                    removeUpload={this._removeUpload}
                    key={index}
                  />
                );
              })}
            </div>
            <div style={styles.uploadSubmit}>
              <div style={styles.filesAmount}>
                <p>{`Uploaded File Amount: ${this.state.files.length} out of 5`}</p>
              </div>
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
      width: "80%",
      height: "90%",
      display: "flex",
      flexDirection: "column",
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
      transition: "ease .2s",
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
      transition: "ease .2s",
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
      display: "flex",
      flexDirection: "column",
      position: "relative"
    },
    uploadSubmit: {
      height: "10%",
      width: "90%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      marginTop: theme.Spacing.SMALL
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
      transition: "ease .2s",
      ":hover": {
        cursor: "pointer",
        background: theme.Colors.HOVER_PRIMARY,
        borderColor: theme.Colors.HOVER_PRIMARY
      }
    },
    cancelButton: {
      width: "100px",
      height: "35px",
      fontSize: theme.FontSizes.MEDIUM,
      backgroundColor: theme.Colors.GRAY,
      color: theme.FontColors.GRAY,
      border: `1px solid ${theme.Colors.GRAY}`,
      borderRadius: theme.BorderRadius.SMALL,
      marginRight: theme.Spacing.SMALL,
      outline: "none",
      transition: "ease .2s",
      ":hover": {
        cursor: "pointer",
        background: theme.Colors.HOVER_GRAY,
        borderColor: theme.Colors.HOVER_GRAY,
        color: theme.FontColors.HOVER_GRAY
      }
    },
    filesAmount: {
      marginRight: "auto",
      fontSize: theme.FontSizes.LARGE,
      color: theme.FontColors.DARK,
      display: "flex",
      alignItems: "center"
    }
  });
}

export default Uploader;
