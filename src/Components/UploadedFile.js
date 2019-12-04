import React, { Component } from "react";
import FileIcon from "react-file-icon";
import * as Icon from "react-feather";
import filesize from "filesize";
import { css } from "glamor";

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
          <p style={styles.fileName}>{file.name}</p>
          <p style={styles.fileSize}>{fileSize}</p>
          <p style={styles.uploadPercentage}>100%</p>
        </div>
        <Icon.CheckCircle size={22} style={styles.checkCircle} />
        <Icon.XCircle
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
      height: "9vh",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: `${theme.Spacing.XSMALL}px ${theme.Spacing.SMALL}px`,
      transition: "ease 1s",
      background: theme.Colors.WHITE,
      boxShadow: theme.Shadows.CARD,
      borderRadius: theme.BorderRadius.SMALL,
      marginTop: theme.Spacing.SMALL
    },
    fileProgress: {
      width: "80%",
      height: "60%",
      display: "flex",
      justifyContent: "center",
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
      marginTop: theme.Spacing.XSMALL
    },
    trash: {
      color: theme.Colors.GRAY,
      marginTop: theme.Spacing.XSMALL,
      transition: "ease .2s",
      ":hover": {
        color: theme.Colors.DANGER,
        cursor: "pointer"
      }
    }
  });
}