import React, { Component } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";

// Components
import Documents from "../Components/Documents";
import Uploader from "../Components/Uploader";

class Dashboard extends Component {
  state = {
    documents: []
  };

  // Lifecycle Methods
  componentDidMount() {
    this._getDocuments();
  }

  // Get Users Documents
  _getDocuments = () => {
    axios.get("/documents/all").then(response => {
      this.setState({
        documents: response.data
      });
    });
  };

  // Remove A Users Document
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

  // Filter Documents
  _filterDocuments = evt => {
    const { value } = evt.target;
    const { documents } = this.state;

    if (value === "") return this._getDocuments();

    const filteredDocuments = documents.filter(document =>
      document.name.includes(value)
    );

    this.setState({
      document: filteredDocuments
    });
  };

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.dashboard}>
        <Documents
          documents={this.state.documents}
          filterDocuments={this._filterDocuments}
          removeDocument={this._removeDocument}
        />
        <Uploader getDocuments={this._getDocuments} />
      </div>
    );
  }

  getStyles = () => ({
    dashboard: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center"
    }
  });
}

export default Dashboard;
