import React, { Component } from "react";
import * as Icon from "react-feather";
import axios from "axios";
import fileSaver from "file-saver";
import FileIcon from "react-file-icon";
import filesize from "filesize";
import moment from "moment";
import { css } from "glamor";
import Loader from "react-loader-spinner";

// Theme
import theme from "../Constants/Theme";

export default class Document extends Component {
  state = {
    loading: false
  };

  _downloadPDF = () => {
    const { document } = this.props;
    this.setState({
      loading: true
    });

    axios
      .post("/documents/createPDF", document)
      .then(() => {
        return axios.get(
          `/documents/fetchPDF/${document.name}${document.created}`,
          {
            responseType: "blob"
          }
        );
      })
      .then(response => {
        const pdfBlob = new Blob([response.data], { type: "application/pdf" });
        fileSaver.saveAs(pdfBlob, `${document.name}.pdf`);
        this.setState({
          loading: false
        });
      });
  };

  render() {
    const styles = this.getStyles();
    const { document, removeDocument } = this.props;
    const fileSize = filesize(document.filesize);
    const createdDate = moment(+document.createddate).format("MMM DD, YYYY");

    return (
      <div style={styles.documentCard}>
        <FileIcon
          extension="PDF"
          fold={true}
          color={theme.Colors.GRAY}
          labelColor={theme.Colors.PDF_RED}
          size={40}
        />

        <div style={styles.documentCardInfo}>
          <div style={styles.text}>{document.filename}</div>
          <div style={styles.documentCardStats}>
            <div>{fileSize}</div>
            <div>{createdDate}</div>
          </div>
        </div>

        <div style={styles.optionsContainer}>
          <Icon.Delete
            size={14}
            className={css(styles.delete)}
            onClick={() =>
              removeDocument(
                document.id,
                document.path,
                document.name,
                document.created
              )
            }
          />
          <Icon.Download
            size={14}
            className={css(styles.download)}
            onClick={this._downloadPDF}
          />
        </div>

        {this.state.loading ? (
          <div style={styles.downloading}>
            <Loader type="ThreeDots" height={40} width={50} color="#FFF" />
          </div>
        ) : null}
      </div>
    );
  }

  getStyles = () => ({
    documentCard: {
      background: theme.Colors.WHITE,
      padding: theme.Spacing.SMALL,
      boxShadow: theme.Shadows.CARD,
      borderRadius: theme.BorderRadius.SMALL,
      color: theme.FontColors.GRAY,
      marginTop: theme.Spacing.MEDIUM,
      width: "100%",
      display: "flex",
      alignItems: "center",
      marginLeft: theme.Spacing.XSMALL,
      marginRight: theme.Spacing.XSMALL
    },
    documentCardInfo: {
      width: "70%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
      justifyContent: "space-between",
      marginLeft: theme.Spacing.SMALL
    },
    text: {
      color: theme.FontColors.DARK,
      fontSize: theme.FontSizes.LARGE,
      marginBottom: theme.Spacing.XSMALL
    },
    documentCardStats: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: theme.FontSizes.MEDIUM,
      color: theme.FontColors.GRAY,
      marginTop: theme.Spacing.XSMALL
    },
    optionsContainer: {
      width: "5%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginLeft: "auto"
    },
    delete: {
      marginBottom: theme.Spacing.XSMALL,
      transition: "ease .2s",
      ":hover": {
        color: theme.FontColors.DARK,
        cursor: "pointer"
      }
    },
    download: {
      marginTop: theme.Spacing.XSMALL,
      transition: "ease .2s",
      ":hover": {
        color: theme.FontColors.DARK,
        cursor: "pointer"
      }
    },
    downloading: {
      height: "100vh",
      width: "100vw",
      background: "rgba(0,0,0,.5)",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "column",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 5
    }
  });
}
