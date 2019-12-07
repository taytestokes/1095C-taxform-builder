import React, { Component } from "react";

// Components
import Document from "./Document";
import ZeroState from "./ZeroState";

// Theme
import theme from "../Constants/Theme";

export default class Documents extends Component {
  render() {
    const styles = this.getStyles();
    const { documents, removeDocument } = this.props;

    return (
      <div style={styles.component}>
        <div style={styles.banner}>
          <h1 style={styles.title}>My Documents</h1>
          <div style={styles.subtitle}>
            <div style={styles.badge}>{documents.length}</div>
          </div>
        </div>
        {documents.length < 1 ? (
          <ZeroState />
        ) : (
          <div style={styles.documents}>
            {documents.map(document => (
              <Document
                removeDocument={removeDocument}
                document={document}
                key={document.name}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  getStyles = () => ({
    component: {
      width: "35vw",
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
      fontSize: theme.FontSizes.XLARGE,
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
    documents: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: `${theme.Spacing.SMALL}px ${theme.Spacing.MEDIUM}px`
    }
  });
}
