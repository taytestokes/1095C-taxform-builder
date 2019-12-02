import React, { Component } from "react";
import FileIcon from "react-file-icon";
import * as Icon from "react-feather";
import filesize from "filesize";
import { css } from "glamor";

// Components
import ProgressBar from "./Progress";

// Theme
import theme from "../Constants/Theme";

export default class UploadedFile extends Component {
  render() {
    const styles = this.getStyles();
    const { file, removeUpload } = this.props;
    const fileType = file.name.split(".")[1];
    const fileSize = filesize(file.size);

    return (
      <div style={styles.fileCard}>
        <FileIcon
          extension={fileType}
          fold={true}
          color={theme.Colors.GRAY}
          labelColor={theme.Colors.OFFICE_GREEN}
          size={45}
        />
        <div style={styles.fileProgress}>
          <div style={styles.fileInfo}>
            <p style={styles.fileName}>{file.name}</p>
            <p style={styles.fileSize}>{fileSize}</p>
            <p style={styles.uploadPercentage}>100%</p>
          </div>
          <div style={styles.progressbar}>
            <ProgressBar progress={100} />
          </div>
        </div>
        <Icon.CheckCircle size={22} style={styles.checkCircle} />
        <Icon.Trash2
          size={22}
          className={css(styles.trash)}
          onClick={() => removeUpload(file)}
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
      padding: `${theme.Spacing.MEDIUM}px 0px`,
      borderBottom: theme.Border.SEGMENT,
      transition: "ease 1s"
    },
    fileProgress: {
      width: "80%",
      height: "60%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center"
    },
    fileInfo: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: theme.FontSizes.LARGE
    },
    fileName: {
      width: "30%"
    },
    fileSize: {
      width: "40%",
      textAlign: "left"
    },
    uploadPercentage: {
      width: "30%",
      textAlign: "right"
    },
    progressbar: {
      width: "100%"
    },
    checkCircle: {
      color: theme.Colors.SUCCESS,
      marginTop: theme.Spacing.SMALL
    },
    trash: {
      color: theme.Colors.GRAY,
      marginTop: theme.Spacing.SMALL,
      transition: "ease .2s",
      ":hover": {
        color: theme.FontColors.GRAY,
        cursor: "pointer"
      }
    }
  });
}
