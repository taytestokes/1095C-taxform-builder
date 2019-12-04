import React, { Component } from "react";
import * as Icon from "react-feather";
import { css } from "glamor";
import axios from "axios";
import fileSaver from "file-saver";
import FileIcon from "react-file-icon";

// Theme
import theme from "../Constants/Theme";

export default class Document extends Component {
  _downloadPDF = () => {
    const { document } = this.props;

    axios
      .post("/documents/createPDF", document)
      .then(() => {
        return axios.get("/documents/fetchPDF", { responseType: "blob" });
      })
      .then(response => {
        const pdfBlob = new Blob([response.data], { type: "application/pdf" });
        fileSaver.saveAs(pdfBlob, `${document.name}.pdf`);
      });
  };

  render() {
    const styles = this.getStyles();
    const { document } = this.props;

    return (
      <div style={styles.document}>
        <FileIcon
          extension="PDF"
          fold={true}
          color={theme.Colors.GRAY}
          labelColor={theme.Colors.PDF_ORANGE}
          size={30}
        />
        <div className={css(styles.text)}>{document.name}</div>
        <div style={styles.size}>{document.size}</div>
        <div style={styles.form}>PDF</div>
        <Icon.Eye size={18} style={styles.preview} />
        <Icon.Download size={18} />
        <Icon.XCircle size={18} />
      </div>
    );
  }

  getStyles = () => ({
    document: {
      background: theme.Colors.WHITE,
      padding: theme.Spacing.SMALL,
      boxShadow: theme.Shadows.CARD,
      borderRadius: theme.BorderRadius.SMALL,
      color: theme.FontColors.GRAY,
      marginTop: theme.Spacing.MEDIUM,
      width: "100%",
      display: "flex",
      alignItems: "center"
    },
    text: {
      marginLeft: theme.Spacing.XSMALL,
      width: "40%",
      textOverflow: "ellipsis",
      overFlow: "hidden",
      whiteSpace: "nowrap",
      color: theme.FontColors.DARK,
      ":hover": {
        cursor: "default"
      }
    },
    size: {
      width: "20%"
    },
    form: {
      width: "80%"
    },
    preview: {
      marginLeft: "auto"
    },
    download: {
      marginLeft: theme.Spacing.SMALL,
      marginRight: theme.Spacing.XSMALL,
      ":hover": {
        cursor: "pointer",
        color: theme.Colors.PRIMARY
      }
    },
    trash: {
      marginLeft: "auto",
      ":hover": {
        cursor: "pointer",
        color: theme.Colors.DANGER
      }
    }
  });
}
