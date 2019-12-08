import React, { Component } from "react";
import { css } from "glamor";
import swal from "@sweetalert/with-react";
import * as Icon from "react-feather";
import axios from "axios";
import { withRouter } from "react-router-dom";

// Components
import Dropzone from "./Dropzone";
import UploadedFile from "./UploadedFile";

// Theme
import theme from "../Constants/Theme";

class Uploader extends Component {
  state = {
    files: [],
    uploading: false,
    uploadProgress: {},
    successfullUpload: false
  };

  // Custom Methods
  onFilesAdded = files => {
    const currentFilesLength = this.state.files.length;
    const fileAmountToCut = 5 - currentFilesLength;
    const incomingFiles = files.slice(0, fileAmountToCut);
    const updatedFileList = this.state.files.concat(incomingFiles);

    if (fileAmountToCut === 0) {
      return swal({
        text: "Only 5 files can be uploaded at a single time",
        button: "Okay"
      });
    }

    this.setState({
      files: updatedFileList
    });
  };

  _uploadFiles = () => {
    const promises = [];

    if (this.state.files.length < 1) {
      return swal({
        text: "Please upload files before attempting to save",
        button: "Okay"
      });
    }

    this.setState({
      uploadProgress: {},
      uploading: true
    });

    this.state.files.forEach(file => {
      promises.push(this._sendRequest(file));
    });

    Promise.all(promises).then(() => {
      this.setState({
        uploading: false
      });
    });
  };

  _sendRequest = file => {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      const formData = new FormData();

      this.setState({
        uploading: true
      });

      // Update file upload information in progress
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

      // Update file upload information when upload completes
      req.upload.addEventListener("load", event => {
        const copy = { ...this.state.uploadProgress };

        copy[file.name] = { state: "done", percentage: 100 };

        this.setState({ uploadProgress: copy });
        resolve(req.response);
      });

      // Update file upload information when upload fails
      req.upload.addEventListener("error", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "error", percentage: 100 };
        this.setState({ uploadProgress: copy });
        reject(req.response);
      });

      formData.append("file", file, file.name);

      req.open("POST", "/documents/upload");
      return req.send(formData);
    })
      .then(() => {
        this.props.getDocuments();
      })
      .then(() => {
        this.setState({
          successfullUpload: true
        });
      });
  };

  _cancelUpload = () => {
    if (this.state.files.length < 1) {
      return swal({
        text: "Please upload files before attempting to cancel",
        button: "Okay"
      });
    }

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
            uploadProgress: {}
          });
          return;
        default:
          return;
      }
    });
  };

  _clearUpload = () => {
    this.setState({
      files: [],
      uploading: false,
      uploadProgress: {},
      successfullUpload: false
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

  _logout = () => {
    axios
      .get("/auth/logout")
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => {
        if (error) throw error;
      });
  };

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.uploader}>
        <div style={styles.banner}>
          <h2>File Uploader</h2>
          <button className={styles.logoutButton} onClick={this._logout}>
            <Icon.LogOut size={16} />
          </button>
        </div>
        <Dropzone onFilesAdded={this.onFilesAdded} />
        <div style={styles.subBanner}>
          <h2>Uploaded Files</h2>
        </div>
        <div style={styles.uploadedFiles}>
          {this.state.files.map((file, index) => {
            return (
              <UploadedFile
                file={file}
                removeUpload={this._removeUpload}
                uploadProgress={this.state.uploadProgress}
                key={file.name + index}
              />
            );
          })}
        </div>
        <div style={styles.uploadSubmit}>
          <div style={styles.filesAmount}>
            <p>{`Uploaded File Amount: ${this.state.files.length} of 5`}</p>
          </div>
          <button
            className={css(styles.cancelButton)}
            onClick={
              this.state.successfullUpload
                ? this._clearUpload
                : this._cancelUpload
            }
          >
            {this.state.successfullUpload ? "Clear" : "Cancel"}
          </button>
          <button
            className={css(styles.saveButton)}
            onClick={this._uploadFiles}
          >
            Save
          </button>
        </div>
      </div>
    );
  }

  getStyles = () => ({
    uploader: {
      width: "60vw",
      height: "100vh",
      borderLeft: theme.Border.DEFAULT,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.Spacing.LARGE,
      paddingTop: 0
    },
    banner: {
      width: "100%",
      height: "8vh",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontWeight: 700,
      fontSize: 20
    },
    subBanner: {
      width: "100%",
      height: "8vh",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontWeight: 700,
      fontSize: 20
    },
    logoutButton: css({
      padding: `${theme.Spacing.XSMALL}px ${theme.Spacing.MEDIUM}px`,
      background: theme.Colors.GRAY,
      color: theme.FontColors.GRAY,
      border: "none",
      borderRadius: theme.BorderRadius.SMALL,
      outline: "none",
      transition: "ease .2s",
      ":hover": {
        background: theme.Colors.HOVER_GRAY,
        cursor: "pointer",
        color: theme.FontColors.DARK
      }
    }),
    uploadedFiles: {
      width: "100%",
      height: "42vh",
      display: "flex",
      flexDirection: "column"
    },
    uploadSubmit: {
      height: "5%",
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingTop: theme.Spacing.SMALL
    },
    saveButton: {
      width: "100px",
      height: "35px",
      fontSize: theme.FontSizes.MEDIUM,
      fontWeight: 700,
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
      fontWeight: 700,
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

export default withRouter(Uploader);
