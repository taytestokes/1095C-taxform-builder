import React, { Component } from "react";
import * as Icon from "react-feather";
import { css } from "glamor";

// Theme
import theme from "../Constants/Theme";

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
    const styles = this.getStyles();

    return (
      <div
        className={css(styles.dropzone)}
        onClick={this.openFileDialog}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
      >
        <Icon.UploadCloud size={40} />
        <p style={styles.dropzoneText}>
          Drop your files to upload or{" "}
          <span className={css(styles.browse)}>browse</span>
        </p>
        <input
          ref={this.fileInputRef}
          type="file"
          multiple
          name="files"
          onChange={this.onFilesAdded}
          style={styles.fileInput}
        />
      </div>
    );
  }

  getStyles = () => ({
    dropzone: {
      width: "100%",
      height: "40%",
      border: "2px dashed #CCC",
      borderRadius: theme.BorderRadius.SMALL,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: this.state.highlight
        ? theme.BackgroundColors.GRAY
        : theme.BackgroundColors.LIGHT_GRAY,
      transition: "ease .2s"
    },
    fileInput: {
      display: "none"
    },
    dropzoneText: {
      fontWeight: "bold",
      padding: theme.Spacing.XSMALL,
      color: theme.FontColors.DARK,
      textAlign: "center"
    },
    browse: {
      color: theme.Colors.PRIMARY,
      ":hover": {
        cursor: "pointer",
        color: theme.Colors.HOVER_PRIMARY
      }
    },
    dropzoneButton: {
      fontSize: theme.FontSizes.MEDIUM,
      fontWeight: 700,
      backgroundColor: theme.Colors.PRIMARY,
      color: theme.FontColors.LIGHT,
      border: "none",
      borderRadius: theme.BorderRadius.SMALL,
      padding: `${theme.Spacing.SMALL}px ${theme.Spacing.LARGE}px`,
      outline: "none",
      transition: "ease .2s",
      ":hover": {
        cursor: "pointer",
        backgroundColor: theme.Colors.HOVER_PRIMARY,
        borderColor: theme.Colors.HOVER_PRIMARY
      }
    }
  });
}

export default Dropzone;
