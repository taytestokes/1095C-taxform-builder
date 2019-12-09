import React, { Component } from "react";
import FileIcon from "react-file-icon";
import * as Icon from "react-feather";
import filesize from "filesize";
import { css } from "glamor";

// Components
import ProgressBar from "../Components/ProgressBar";

// Theme
import theme from "../Constants/Theme";

export default class UploadedFile extends Component {
  render() {
    const styles = this.getStyles();
    const { file, removeUpload, uploadProgress } = this.props;
    const fileType = file.name.split(".")[1];
    const fileSize = filesize(file.size);
    const progressPercentage = uploadProgress[file.name]
      ? uploadProgress[file.name].percentage
      : 0;

    return (
      <div style={styles.fileCard}>
        <FileIcon
          extension={fileType}
          fold={true}
          color={theme.Colors.GRAY}
          labelColor={theme.Colors.OFFICE_GREEN}
          size={40}
        />
        <div style={styles.fileProgress}>
          <div style={styles.fileInfo}>
            <p style={styles.fileName}>{file.name}</p>
            <p style={styles.uploadPercentage}>{progressPercentage}%</p>
            <Icon.CheckCircle
              size={14}
              style={{
                color:
                  progressPercentage === 100
                    ? theme.Colors.SUCCESS
                    : theme.Colors.GRAY,
                ...styles.checkCircle
              }}
            />
          </div>
          <ProgressBar progress={progressPercentage} />
        </div>

        <div style={styles.fileSize}>{fileSize}</div>

        <Icon.X
          size={20}
          className={styles.deleteUpload}
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
      padding: `${theme.Spacing.XSMALL}px 0px`,
      transition: "ease 1s",
      background: theme.Colors.WHITE,
      borderBtoom: theme.Border.DEFAULT
    },
    fileProgress: {
      width: "75%",
      height: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center"
    },
    fileInfo: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      fontSize: theme.FontSizes.MEDIUM
    },
    fileName: {
      marginRight: "auto"
    },
    uploadPercentage: {
      marginRight: theme.Spacing.SMALL
    },
    fileSize: {
      fontSize: theme.FontSizes.MEDIUM,
      marginTop: theme.Spacing.XSMALL
    },
    deleteUpload: css({
      color: theme.Colors.GRAY,
      marginTop: theme.Spacing.XSMALL,
      transition: "ease .2s",
      ":hover": {
        color: theme.Colors.DANGER,
        cursor: "pointer"
      }
    })
  });
}
