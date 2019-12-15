import React, { Component } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";

// Components
import Documents from "../Components/Documents";
import Uploader from "../Components/Uploader";

class Dashboard extends Component {
  state = {
    documents: [],
    loading: true
  };

  // Lifecycle Methods
  componentDidMount() {
    this._getDocuments();
  }

  // Get Users Documents
  _getDocuments = () => {
    axios.get("/documents/all").then(response => {
      console.log(response)
      this.setState({
        documents: response.data,
        loading: false
      });
    });
  };

  // Remove A Users Document
  _removeDocument = (id, filepath, filename, createddate) => {
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
            .post(`/documents/delete/${id}`, { filepath })
            .then(response => {
              this.setState({
                documents: response.data
              });
              return axios.delete(`/documents/deletePDF/${filename}${createddate}`);
            });
        default:
          return;
      }
    });
  };

  // Filter Documents
  _filterDocuments = evt => {
    const { value } = evt.target;

    axios.get("/documents/all").then(response => {
      const { data } = response;

      if (value === "") {
        return this.setState({
          documents: data
        });
      }

      const filteredDocuments = data.filter(document =>
        document.filename.includes(value)
      );

      this.setState({
        documents: filteredDocuments
      });
    });
  };

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.dashboard}>
        <Documents
          documents={this.state.documents}
          filterDocuments={this._filterDocuments}
          loading={this.state.loading}
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
