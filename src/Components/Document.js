import React, { Component } from "react";
import axios from "axios";
import fileSaver from "file-saver";
import FileIcon from "react-file-icon";
import moment from "moment";
import { css } from "glamor";
import { Button } from 'semantic-ui-react';

// Theme
import theme from "../Constants/Theme";

export default class Document extends Component {
  state = {
    loading: false,
    previewPDF: false,
  };

  _previewPDF = () => {
    const { document } = this.props;

    axios
      .post("/documents/createPDF", document)
      .then(() => {
        return axios.get(`/documents/fetchPDF/${document.filename}${document.createddate}`, { responseType: "blob" });
      })
      .then(response => {
        const pdf = new Blob([response.data], { type: "application/pdf" });
        const fileUrl = URL.createObjectURL(pdf);
        window.open(fileUrl);
      });
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
          loading: true
        });
      });
  };

  render() {
    const styles = this.getStyles();
    const { document, removeDocument } = this.props;
    const createdDate = moment(+document.createddate).format("MMM DD, YYYY");

    console.log(document)
    return (
      <div className={styles.documentCard}>
        <FileIcon
          extension="PDF"
          fold={true}
          color={theme.Colors.GRAY}
          labelColor={theme.Colors.PDF_RED}
          size={40}
        />

        <div style={styles.section}>
          <p>{document.filename}</p>
        </div>

        <div style={styles.section}>
          <p>{document.createdby}</p>
        </div>

        <div style={styles.section}>
          <p>{createdDate}</p>
        </div>

        <div style={styles.section}>
          <Button.Group basic size="mini">
            <Button icon="eye" onClick={this._previewPDF} />
            <Button icon="download" />
          </Button.Group>
        </div>
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
    section: {
      width: '25%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginLeft: theme.Spacing.SMALL,
    }
  });
}
