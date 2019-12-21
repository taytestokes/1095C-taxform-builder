import React, { Component } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";

// Components
import Documents from "../Components/Documents";
import NewDocuments from '../Components/NewDocuments';
import DocumentCreater from '../Components/DocumentCreater';
import Navbar from '../Components/Navbar';
import SideNavbar from '../Components/SideNavbar';

// Theme
import theme from "../Constants/Theme";

// Router
import DashboardRouter from '../Routes/DashboardRouter';

class Dashboard extends Component {
  state = {
    documents: [],
    loading: true
  };

  // Lifecycle Methods
  // componentDidMount() {
  //   this._getDocuments();
  // }


  // Remove A Users Document
  // _removeDocument = (id, filepath, filename, createddate) => {
  //   swal("Are you sure you want to remove this upload?", {
  //     buttons: {
  //       cancel: "Nevermind",
  //       confirm: {
  //         text: "Yes",
  //         value: "confirm"
  //       }
  //     }
  //   }).then(value => {
  //     switch (value) {
  //       case "confirm":
  //         return axios
  //           .post(`/documents/delete/${id}`, { filepath })
  //           .then(response => {
  //             this.setState({
  //               documents: response.data
  //             });
  //             return axios.delete(`/documents/deletePDF/${filename}${createddate}`);
  //           });
  //       default:
  //         return;
  //     }
  //   });
  // };

  // Filter Documents
  // _filterDocuments = evt => {
  //   const { value } = evt.target;

  //   axios.get("/documents/all").then(response => {
  //     const { data } = response;

  //     if (value === "") {
  //       return this.setState({
  //         documents: data
  //       });
  //     }

  //     const filteredDocuments = data.filter(document =>
  //       document.filename.includes(value)
  //     );

  //     this.setState({
  //       documents: filteredDocuments
  //     });
  //   });
  // };

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.dashboard}>
        <SideNavbar />
        <div style={styles.contentContainer}>
          {/* <Documents
            documents={this.state.documents}
            filterDocuments={this._filterDocuments}
            loading={this.state.loading}
            removeDocument={this._removeDocument}
          />
          <NewDocuments /> */}
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
