import React, { Component } from "react";
import axios from "axios";
import * as Icon from "react-feather";
import { css } from "glamor";
import Loader from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import swal from "@sweetalert/with-react";

// Components
import Document from "./Document";

// Theme
import theme from "../Constants/Theme";

export default class Documents extends Component {
  constructor() {
    super();

    this.state = {
      documents: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({
      loading: true
    });

    this._getDocuments();
  }

  _getDocuments = () => {
    axios
      .get("/documents/all")
      .then(response => {
        this.setState({
          documents: response.data,
          loading: false
        });
      })
      .catch(() => {
        this.setState({
          loading: false
        });
      });
  };

  _removeDocument = (id, path, name, created) => {
    swal("Are you sure you want to remove this upload?", {
      buttons: {
        cancel: "Nevermind",
        confirm: {
          text: "Yes",
          value: "confirm"
        }
      }
    }).then(value => {
      switch (value) {
        case "confirm":
          return axios
            .post(`/documents/delete/${id}`, { path })
            .then(response => {
              // update state
              this.setState({
                documents: response.data
              });
              // make request to remove PDF file
              return axios.delete(`/documents/deletePDF/${name}${created}`);
            });
        default:
          return;
      }
    });
  };

  render() {
    const styles = this.getStyles();

    if (this.state.loading) {
      return (
        <div style={styles.loadingstate}>
          <Loader
            type="ThreeDots"
            color={theme.FontColors.DARK}
            height={45}
            width={45}
          />
        </div>
      );
    }

    if (this.state.documents.length < 1) {
      return (
        <div style={styles.zerostate}>
          <Icon.AlertCircle
            size={45}
            style={{ color: theme.FontColors.GRAY }}
          />
          <p style={styles.zerostateText}>
            It looks like you don't have any documents, get started by clicking
            the button below
          </p>
          <NavLink
            className={css(styles.zerostateButton)}
            to="/dashboard/upload"
          >
            Get Started
          </NavLink>
        </div>
      );
    }

    return (
      <div style={styles.component}>
        <div style={styles.documentsContainer}>
          <div style={styles.banner}>
            <div style={styles.bannerContainer}>
              <h1 style={styles.title}>Documents</h1>
              <p style={styles.subtitle}>({this.state.documents.length})</p>
            </div>
          </div>
          <div style={styles.documents}>
            {this.state.documents.map(document => (
              <Document
                removeDocument={this._removeDocument}
                document={document}
                key={document.name}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  getStyles = () => ({
    component: {
      width: "100vw",
      height: "92vh",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    },
    documentsContainer: {
      height: "90%",
      width: "72%",
      display: "flex",
      flexDirection: "column"
    },
    banner: {
      padding: `${theme.Spacing.MEDIUM}px 0px`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    title: {
      fontSize: theme.FontSizes.JUMBO,
      color: theme.FontColors.DARK,
      marginLeft: theme.Spacing.XSMALL
    },
    subtitle: {
      fontSize: theme.FontSizes.LARGE,
      color: theme.Colors.PRIMARY,
      marginLeft: theme.Spacing.XSMALL,
      marginTop: theme.Spacing.XSMALL
    },
    bannerContainer: {
      display: "flex",
      alignItems: "center",
      paddingRight: theme.Spacing.XSMALL
    },
    loadingstate: {
      width: "100vw",
      height: "92vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    zerostate: {
      width: "100vw",
      height: "92vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    zerostateText: {
      width: "25%",
      margin: `${theme.Spacing.LARGE}px 0px`,
      fontSize: theme.FontSizes.LARGE,
      fontWeight: 500,
      color: theme.FontColors.GRAY,
      textAlign: "center",
      lineHeight: 1.2
    },
    zerostateButton: {
      fontSize: theme.FontSizes.MEDIUM,
      fontWeight: 700,
      backgroundColor: theme.Colors.PRIMARY,
      color: theme.FontColors.LIGHT,
      border: `1px solid ${theme.Colors.PRIMARY}`,
      borderRadius: theme.BorderRadius.SMALL,
      padding: `${theme.Spacing.SMALL}px ${theme.Spacing.XLARGE}px`,
      outline: "none",
      textDecoration: "none",
      transition: "ease .2s",
      ":hover": {
        background: theme.Colors.HOVER_PRIMARY,
        borderColor: theme.Colors.HOVER_PRIMARY,
        cursor: "pointer"
      }
    },
    documents: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      marginBottom: theme.Spacing.MEDIUM
    }
  });
}
