import React, { Component } from "react";
import axios from "axios";
import fileSaver from "file-saver";
import FileIcon from "react-file-icon";
import moment from "moment";
import { css } from "glamor";
import { Button, Popup } from 'semantic-ui-react';

// Theme
import theme from "../Constants/Theme";

export default class Document extends Component {
  state = {
    dowloading: false,
    previewing: false,
  };

  _previewing = () => {
    const { document } = this.props;

    this.setState({
      previewing: true,
    });

    axios
      .post("/documents/createPDF", document)
      .then(() => {
        return axios.get(`/documents/fetchPDF/${document.filename}${document.createddate}`, { responseType: "blob" });
      })
      .then(response => {
        const pdf = new Blob([response.data], { type: "application/pdf" });
        const fileUrl = URL.createObjectURL(pdf);
        window.open(fileUrl);

        this.setState({
          previewing: false,
        });
      });
  };

  _downloadPDF = () => {
    const { document } = this.props;

    this.setState({
      downloading: true
    });

    axios
      .post("/documents/createPDF", document)
      .then(() => {
        return axios.get(`/documents/fetchPDF/${document.filename}${document.createddate}`, { responseType: "blob" });
      })
      .then(response => {
        const pdfBlob = new Blob([response.data], { type: "application/pdf" });
        fileSaver.saveAs(pdfBlob, `${document.filename}.pdf`);

        this.setState({
          downloading: false,
        });
      });
  };

  render() {
    const styles = this.getStyles();
    const { document } = this.props;
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

        <div style={styles.sectionInfo}>
          <h2>{document.filename}</h2>
          <div style={styles.innerSectionInfo}>
            <p>Created:</p>
            <p style={{ marginLeft: theme.Spacing.XSMALL }}>{createdDate}</p>
          </div>
        </div>

        <div style={styles.section}>
          <Button.Group basic size="mini">
            <Button icon="trash" onClick={() => this.props.removeDocument(document.id, document.filename, document.createddate)} />
            <Button icon="eye" onClick={this._previewing} loading={this.state.previewing} />
            <Button icon="download" onClick={this._downloadPDF} loading={this.state.downloading} />
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
      marginTop: theme.Spacing.SMALL,
      width: "100%",
      display: "flex",
      alignItems: "center",
      transition: "ease .2s",
    }),
    sectionInfo: {
      width: '65%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      color: theme.FontColors.DARK,
      fontSize: theme.FontSizes.LARGE,
      fontWeight: 600,
      marginLeft: theme.Spacing.XSMALL,
      marginTop: theme.Spacing.XSMALL
    },
    innerSectionInfo: {
      width: '100%',
      display: 'flex',
      color: theme.FontColors.GRAY,
      fontSize: theme.FontSizes.MEDIUM,
      marginTop: theme.Spacing.XSMALL
    },
    section: {
      width: '20%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      fontSize: theme.FontSizes.MEDIUM,
      color: theme.FontColors.DARK,
      marginLeft: 'auto'
    }
  });
}
