import React, { Component } from "react";

// Components
import SideNavbar from "../Components/SideNavbar";

// Router
import DashBoardRoutes from "../Routes/DashboardRoutes";

class Dashboard extends Component {
  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.dashboard}>
        <SideNavbar />
        {DashBoardRoutes}
      </div>
    );
  }

  getStyles = () => ({
    dashboard: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center"
    }
  });
}

export default Dashboard;
