import React, { Component } from "react";
import * as Icon from "react-feather";

// Router
import MasterRouter from "../Routes/MasterRouter";

// Styles
import "../Styles/Reset.css";
import "../Styles/SweetAlerts.css";

// Theme
import theme from "../Constants/Theme";

// Utils
import { getBrowserSize } from "../Utils/Browser";

class MasterWidget extends Component {
  constructor() {
    super();

    this.state = {
      browserSize: getBrowserSize()
    };
  }


  render() {
    const styles = this.getStyles();
    const { browserSize } = this.state;


    if (browserSize === "small") {
      return (
        <div style={styles.alert}>
          <div style={styles.card}>
            <Icon.AlertCircle size={35} />
            <p style={styles.cardText}>Browser size is not supported! Please use a larger view port.</p>
          </div>
        </div>
      );
    }

    return <div style={styles.widget}>{MasterRouter}</div>;
   }

  getStyles = () => ({
    app: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      background: '#f9fafb',
      fontFamily: theme.FontFamily.PRIMARY,
      color: theme.FontColors.GRAY,
    },
    info: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.Spacing.LARGE,
    },
    widget: {
      width: "100vw",
      height: "100vh",
      background: theme.BackgroundColors.LIGHT,
      fontFamily: theme.FontFamily.PRIMARY,
      color: theme.FontColors.DARK
    },
    alert: {
      width: "100%",
      height: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      background: '#f9fafb',
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: theme.FontFamily.PRIMARY,
      color: theme.FontColors.GRAY,
    },
    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    cardText: {
      marginTop: theme.Spacing.MEDIUM,
      fontSize: theme.Spacing.MEDIUM,
      width: '65%',
      textAlign: 'center',
    }
  });
}

export default MasterWidget;
