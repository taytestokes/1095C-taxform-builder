import React, { Component } from "react";
import { css } from "glamor";
import * as Icon from "react-feather";
import Loader from "react-loader-spinner";
import axios from 'axios';
import { Pagination } from 'semantic-ui-react';

// Components
import Document from "./Document";
import ZeroState from "./ZeroState";

// Theme
import theme from "../Constants/Theme";

class Documents extends Component {
  /* State */
  state = {
    documents: [],
    loading: false,
  };

  /* Lifecycle Methods */
  componentDidMount() {
    this._getDocuments();
  };

  /* Custom Methods */
  _getDocuments = () => {
    axios.get("/documents/all")
      .then(({ data }) => {
        this.setState({
          documents: data,
          loading: false
        })
      });
  };

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.component}>

        {/* Banner */}
        <div style={styles.banner}>
          <div style={styles.searchContainer}>
            <Icon.Search size={18} />
            <input
              type="text"
              className={styles.search}
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Info Bar */}
        <div style={styles.sectionInfo}>
          <div style={styles.section}>Type</div>
          <div style={styles.section}>Name</div>
          <div style={styles.section}>Author</div>
          <div style={styles.section}>Created</div>
          <div style={styles.section}>Actions</div>
        </div>

        <div className={styles.documents}>
          {this.state.documents.length < 1 ? (
            <ZeroState />
          ) : (
              <React.Fragment>
                {this.state.documents.map((document, index) => (
                  <Document
                    document={document}
                    key={Math.floor(Math.random() * Math.floor(5000))}
                  />
                ))}
              </React.Fragment>
            )}
        </div>
      </div>
    );
  }

  getStyles = () => ({
    component: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    banner: {
      width: "100%",
      padding: theme.Spacing.SEMI_SMALL,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: theme.BackgroundColors.LIGHT,
      borderBottom: theme.Border.DEFAULT
    },
    sectionInfo: {
      padding: theme.Spacing.SMALL,
      color: theme.FontColors.GRAY,
      fontSize: theme.FontSizes.SMALL,
      display: 'flex',
      alignItems: 'center',
      width: '80%',
    },
    title: {
      fontWeight: 700,
      fontSize: 20,
      color: theme.FontColors.DARK
    },
    subtitle: {
      fontSize: theme.FontSizes.LARGE,
      color: theme.Colors.PRIMARY,
      marginTop: theme.Spacing.XSMALL
    },
    badge: {
      height: 25,
      width: 25,
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      borderRadius: "50%",
      background: theme.Colors.GRAY,
      color: theme.FontColors.GRAY,
      fontWeight: 700,
      fontSize: theme.FontSizes.SMALL
    },
    loader: {
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexDirection: "column",
    },
    searchContainer: {
      width: "50%",
      height: "5vh",
      background: theme.Colors.WHITE,
      display: "flex",
      alignItems: "center",
      border: theme.Border.DEFAULT,
      borderRadius: theme.BorderRadius.SMALL,
      padding: theme.Spacing.SMALL
    },
    search: css({
      width: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      fontSize: theme.FontSizes.LARGE,
      marginLeft: theme.Spacing.SMALL
    }),
    documents: css({
      width: "80%",
      height: "92%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: `${theme.Spacing.SMALL}px ${theme.Spacing.SEMI_SMALL}px`,
      paddingTop: 0,
      overflow: "auto",
      '::-webkit-scrollbar': {
        display: 'none'
      }
    }),
  });
}

export default Documents;