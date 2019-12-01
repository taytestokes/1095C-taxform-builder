import React, { Component } from "react";
import FileIcon, { defaultStyles } from "react-file-icon";
import * as Icon from "react-feather";

// Components
import ProgressBar from "./Progress";

// Theme
import theme from "../Constants/Theme";

export default class UploadedFile extends Component {
  render() {
    const styles = this.getStyles();
    const { file, uploadProgress } = this.props;
    return (
      <div style={styles.fileCard}>
        <FileIcon extension={"xlsx"} {...defaultStyles.docx} size={45} />
        <div style={styles.fileProgress}>
          <div style={styles.fileInfo}>
            <p>{file.name}</p>
            <p>
              {uploadProgress[file.name]
                ? `${uploadProgress[file.name].percentage}%`
                : `0%`}
            </p>
          </div>
          <div style={styles.progressbar}>
            <ProgressBar
              progress={
                uploadProgress[file.name]
                  ? uploadProgress[file.name].percentage
                  : 0
              }
            />
          </div>
        </div>
        <Icon.CheckCircle
          size={20}
          style={{
            color: theme.Colors.SUCCESS
          }}
        />
      </div>
    );
  }

  getStyles = () => ({
    fileCard: {
      width: "100%",
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
    }
  });
}
