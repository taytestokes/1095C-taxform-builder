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
          `/documents/fetchPDF/${document.filename}${document.createddate}`,
          {
            responseType: "blob"
          }
        );
      })
      .then(response => {
        const pdfBlob = new Blob([response.data], { type: "application/pdf" });
        fileSaver.saveAs(pdfBlob, `${document.filename}.pdf`);
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
      <div className={styles.documentCard}>
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
            <div style={styles.createdDate}>{createdDate}</div>
          </div>
        </div>

        <div style={styles.optionsContainer}>
          <div>
            <Icon.Delete
              size={14}
              className={css(styles.delete)}
              onClick={() =>
                removeDocument(
                  document.id,
                  document.filepath,
                  document.filename,
                  document.createddate
                )
              }
            />
          </div>
          <div className={styles.downloadContainer} onClick={this._downloadPDF}>
            <h3 style={styles.downloadText}>Download</h3>
            <Icon.Download
              size={14}
            />
          </div>
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
    documentCard: css({
      background: theme.Colors.WHITE,
      padding: theme.Spacing.SMALL,
      border: theme.Border.DEFAULT,
      borderRadius: theme.BorderRadius.SMALL,
      color: theme.FontColors.GRAY,
      marginTop: theme.Spacing.MEDIUM,
      width: "100%",
      display: "flex",
      alignItems: "center",
      marginLeft: theme.Spacing.XSMALL,
      marginRight: theme.Spacing.XSMALL,
      transition: "ease .2s",
    }),
    documentCardInfo: {
      width: "70%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
      justifyContent: "center",
      marginLeft: theme.Spacing.SMALL
    },
    text: {
      color: theme.FontColors.DARK,
      fontSize: theme.FontSizes.MEDIUM,
      fontWeight: 700,
      marginBottom: theme.Spacing.XSMALL,
    },
    documentCardStats: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      fontSize: theme.FontSizes.SMALL,
      fontWeight: 600,
      color: theme.FontColors.GRAY,
      marginTop: theme.Spacing.XSMALL,
    },
    optionsContainer: {
      width: "15%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginLeft: "auto",
      color: theme.FontColors.DARK,
      ":hover": {
        cursor: "pointer",
      }
    },
    delete: {
      marginBottom: theme.Spacing.XSMALL,
      transition: "ease .2s",
      ':hover': {
        cursor: 'pointer',
      }
    },
    downloadContainer: css({
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      fontSize: theme.FontSizes.SMALL,
      transition: "ease .2s",
      ":hover": {
        color: theme.Colors.PRIMARY,
        cursor: "pointer"
      }
    }),
    downloadText: {
      marginRight: theme.Spacing.XSMALL,
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
      zIndex: 15
    },
    createdDate: {
      marginLeft: theme.Spacing.SMALL,
    }
  });
}
