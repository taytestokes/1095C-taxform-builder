import React, { Component } from "react";
import { css } from "glamor";
import axios from 'axios';
import { Input, Pagination, Button, Loader } from 'semantic-ui-react';
import swal from "@sweetalert/with-react";

// Components
import Document from "./Document";
import Banner from '../Components/Banner';

// Theme
import theme from "../Constants/Theme";

class Documents extends Component {
  state = {
    documents: [],
    loading: true,
    currentPage: 1,
    documentsPerPage: 8,
  };

  componentDidMount() {
    this._getDocuments();
  };

  _getDocuments = () => {
    axios.get("/documents/user")
      .then(({ data }) => {
        this.setState({
          documents: data,
          loading: false,
        })
      });
  };

  _filterDocuments = evt => {
    const { value } = evt.target;

    axios.get("/documents/user")
      .then(response => {
        const { data } = response;

        if (value === "") {
          return this.setState({
            documents: data
          });
        } else {
          const filteredDocuments = data.filter(document =>
            document.filename.toLowerCase().includes(value.toLowerCase())
          );

          return this.setState({
            documents: filteredDocuments
          });
        }
      });
  };

  _handlePageChange = (evt, data) => {
    this.setState({
      currentPage: data.activePage
    });
  };

  _removeDocument = (id, filename, createddate) => {
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
            .post(`/documents/delete/${id}`)
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

  render() {
    const styles = this.getStyles();
    const indexOfLastDocument = this.state.currentPage * this.state.documentsPerPage;
    const indexOfFirstDocument = indexOfLastDocument - this.state.documentsPerPage;
    const currentDocuments = this.state.documents.slice(indexOfFirstDocument, indexOfLastDocument);
    const amountOfPages = Math.ceil(this.state.documents.length / this.state.documentsPerPage);


    return (
      <div style={styles.component}>
        <Banner />
        {this.state.loading ? (
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Loader active style={{ position: 'absolute' }} />
          </div>
        ) : (
            <React.Fragment>
              <div style={styles.sectionInfo}>
                <Input icon="search" placeholder="Search..." iconPosition="left" onChange={this._filterDocuments} size="mini" style={styles.search} />
                <Pagination
                  boundaryRange={0}
                  defaultActivePage={1}
                  ellipsisItem={null}
                  firstItem={null}
                  lastItem={null}
                  siblingRange={1}
                  totalPages={amountOfPages}
                  style={styles.pagination}
                  size="mini"
                  onPageChange={this._handlePageChange}
                />
              </div>

              <div className={styles.documents}>
                {currentDocuments.map(document => (
                  <Document
                    document={document}
                    removeDocument={this._removeDocument}
                    key={Math.floor(Math.random() * Math.floor(5000))}
                  />
                ))}
              </div>
            </React.Fragment>
          )}
      </div >
    );
  };

  getStyles = () => ({
    component: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      overflow: 'auto',
    },
    loader: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center'
    },
    sectionInfo: {
      color: theme.FontColors.GRAY,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: '80%',
      height: '10vh',
      marginTop: theme.Spacing.LARGE,
    },
    pagination: {
      boxShadow: 'none',
      outline: 'none'
    },
    search: {
      width: '50%',
      height: 37,
      marginRight: 'auto'
    },
    documents: css({
      width: "80%",
      height: '90%',
      display: "flex",
      flexDirection: 'column',
      alignItems: "center",
      paddingTop: 0,
      overflow: "auto",
      '::-webkit-scrollbar': {
        display: 'none'
      }
    }),
  });
}

export default Documents;