import React, { Component } from "react";
import { css } from "glamor";
import * as Icon from "react-feather";
import Loader from "react-loader-spinner";

// Components
import Document from "./Document";
import ZeroState from "./ZeroState";

// Theme
import theme from "../Constants/Theme";

export default class Documents extends Component {
  render() {
    const styles = this.getStyles();
    const { documents, removeDocument, filterDocuments, loading } = this.props;

    return (
      <div style={styles.component}>
        <div style={styles.banner}>
          <h1 style={styles.title}>My Documents</h1>
          <div style={styles.subtitle}>
            <div style={styles.badge}>{documents.length}</div>
          </div>
        </div>
        {loading ? (
          <div style={styles.loader}>
            <Loader
              type="ThreeDots"
              height={40}
              width={40}
              color={theme.FontColors.DARK}
            />
          </div>
        ) : (
            <div style={styles.documents}>
              <div style={styles.searchContainer}>
                <Icon.Search size={18} />
                <input
                  type="text"
                  className={styles.search}
                  placeholder="Search..."
                  onChange={filterDocuments}
                />
              </div>
              {documents.length < 1 ? (
                <ZeroState />
              ) : (
                  <React.Fragment>
                    {documents.map((document, index) => (
                      <Document
                        removeDocument={removeDocument}
                        document={document}
                        key={document.name + index}
                      />
                    ))}
                  </React.Fragment>
                )}
            </div>
          )}
      </div>
    );
  }

  getStyles = () => ({
    component: {
      width: "40vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#f9fafb"
    },
    banner: {
      width: "100%",
      height: "8vh",
      padding: theme.Spacing.MEDIUM,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: theme.BackgroundColors.LIGHT,
      borderBottom: theme.Border.DEFAULT
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
      flexDirection: "column"
    },
    searchContainer: {
      width: "100%",
      height: "5vh",
      background: theme.Colors.WHITE,
      display: "flex",
      alignItems: "center",
      border: theme.Border.DEFAULT,
      borderRadius: theme.BorderRadius.SMALL,
      padding: theme.Spacing.SMALL
    },
    search: css({
      width: "90%",
      height: "5vh",
      border: "none",
      outline: "none",
      background: "transparent",
      fontSize: theme.FontSizes.LARGE,
      marginLeft: theme.Spacing.SMALL
    }),
    documents: {
      width: "100%",
      height: "92vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: `${theme.Spacing.SMALL}px ${theme.Spacing.MEDIUM}px`,
      overflow: "scroll"
    }
  });
}
