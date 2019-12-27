import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom';

// Components
import SideNavbar from '../Components/SideNavbar';

// Theme
import theme from "../Constants/Theme";

// Router
import DashboardRouter from '../Routes/DashboardRouter';

class Dashboard extends Component {
  componentDidMount() {
    this._checkUserSession();
  };

  _checkUserSession = () => {
    axios.get('/auth/session')
      .then(({ data }) => {
        if (!data.user) {
          this.props.history.push('/')
        };
      })
  };

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.dashboard}>
        <SideNavbar />
        <div style={styles.contentContainer}>
          {DashboardRouter}
        </div>
      </div>
    );
  }

  getStyles = () => ({
    dashboard: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: 'row',
      alignItems: "center",
      background: '#f9fafb',
    },
    banner: {
      width: '12vw',
      height: '100%',
      background: theme.Colors.WHITE,
      borderRight: theme.Border.DEFAULT,
      padding: theme.Spacing.SEMI_SMALL,
    },
    innerBanner: {
      width: '100%',
      height: '5vh',
    },
    contentContainer: {
      display: 'flex',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
      background: '#f9fafb',
    },
  });
}

export default Dashboard;
