import React, { Component } from "react";
import * as Icon from "react-feather";
import { css } from "glamor";
import axios from "axios";
import fileSaver from "file-saver";

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
        console.log(pdfBlob);
        fileSaver.saveAs(pdfBlob, "testPdf.pdf");
      });
  };

  render() {
    const styles = this.getStyles();
    const { document } = this.props;

    return (
      <div style={styles.document}>
        <Icon.FileText size={20} />
        <p className={css(styles.text)}>{document.name}</p>
        <Icon.Trash
          size={16}
          className={css(styles.trash)}
          onClick={() => this.props.removeDocument(document.id)}
        />
        <Icon.Download
          size={18}
          className={css(styles.download)}
          onClick={this._downloadPDF}
        />
      </div>
    );
  }

  getStyles = () => ({
    document: {
      background: theme.Colors.WHITE,
      padding: theme.Spacing.MEDIUM,
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
      maxWidth: "80%",
      textOverflow: "ellipsis",
      overFlow: "hidden",
      whiteSpace: "nowrap",
      color: theme.FontColors.DARK,
      ":hover": {
        cursor: "default"
      }
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
