import React, { Component } from "react";
import { css } from "glamor";
import axios from 'axios';
import { Input, Pagination, Dropdown, Loader } from 'semantic-ui-react';
import swal from "@sweetalert/with-react";

// Components
import Document from "./Document";
import Banner from '../Components/Banner';
import DocumentZeroState from '../Components/DocumentsZeroState';

// Constants
import theme from "../Constants/Theme";
import { documentSortOptions } from '../Constants/Options';

class Documents extends Component {
  state = {
    documents: [],
    loading: true,
    currentPage: 1,
    documentsPerPage: 8,
    sortOption: 'Newest',
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

  _searchDocuments = evt => {
    const { sortOption } = this.state;
    const { value } = evt.target;
    let sortedDocuments;
    let comparison;

    axios.get("/documents/user")
      .then(response => {
        const { data } = response;

        if (sortOption === 'Newest') {
          sortedDocuments = data.sort((a, b) => b.createddate - a.createddate);
        };

        if (sortOption === 'Oldest') {
          sortedDocuments = data.sort((a, b) => a.createddate - b.createddate);
        };

        if (sortOption === 'A-Z') {
          sortedDocuments = data.sort((a, b) => {
            if (a.filename.toUpperCase() > b.filename.toUpperCase()) {
              comparison = 1;
            } else if (a.filename.toUpperCase() < b.filename.toUpperCase()) {
              comparison = -1;
            }
            return comparison;
          });
        };

        if (sortOption === 'Z-A') {
          sortedDocuments = data.sort((a, b) => {
            if (b.filename.toUpperCase() > a.filename.toUpperCase()) {
              comparison = 1;
            } else if (b.filename.toUpperCase() < a.filename.toUpperCase()) {
              comparison = -1;
            }
            return comparison;
          });
        }

        if (value === "") {
          return this.setState({
            documents: sortedDocuments
          });
        } else {
          const filteredDocuments = sortedDocuments.filter(document =>
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

  _sortDocuments = (evt, result) => {
    const { value } = result;
    const { documents } = this.state;
    let sortedDocuments;
    let comparison;

    if (value === 'Newest') {
      sortedDocuments = documents.sort((a, b) => b.createddate - a.createddate);

      this.setState({
        sortOption: value,
        documents: sortedDocuments
      });
    };

    if (value === 'Oldest') {
      sortedDocuments = documents.sort((a, b) => a.createddate - b.createddate);

      this.setState({
        sortOption: value,
        documents: sortedDocuments
      });
    };

    if (value === 'A-Z') {
      sortedDocuments = documents.sort((a, b) => {
        if (a.filename.toUpperCase() > b.filename.toUpperCase()) {
          comparison = 1;
        } else if (a.filename.toUpperCase() < b.filename.toUpperCase()) {
          comparison = -1;
        }
        return comparison;
      });

      this.setState({
        sortOption: value,
        documents: sortedDocuments
      });
    };

    if (value === 'Z-A') {
      sortedDocuments = documents.sort((a, b) => {
        if (b.filename.toUpperCase() > a.filename.toUpperCase()) {
          comparison = 1;
        } else if (b.filename.toUpperCase() < a.filename.toUpperCase()) {
          comparison = -1;
        }
        return comparison;
      });

      this.setState({
        sortOption: value,
        documents: sortedDocuments
      });
    };
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
                <div style={styles.dropdown}>
                  <Dropdown
                    options={documentSortOptions}
                    icon="filter"
                    basic
                    button
                    labeled
                    value={this.state.sortOption}
                    onChange={this._sortDocuments}
                    className='icon'
                    style={{ width: '100%', height: '100%' }}
                    size="mini"
                  />
                </div>

                <div style={styles.search}>
                  <Input
                    placeholder="Search By Name..."
                    onChange={this._searchDocuments}
                    size="tiny"
                    style={{ width: '100%', height: '100%' }}
                    type="text"
                    icon="search"
                    iconPosition="left"
                    fluid
                  />
                </div>

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
                {currentDocuments.length === 0 ? (
                  <DocumentZeroState />
                ) : (
                    <React.Fragment>
                      {currentDocuments.map(document => (
                        <Document
                          document={document}
                          removeDocument={this._removeDocument}
                          key={Math.floor(Math.random() * Math.floor(5000))}
                        />
                      ))}
                    </React.Fragment>
                  )}
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
      outline: 'none',
      marginLeft: 'auto',
      height: 41
    },
    search: {
      width: '50%',
      height: 41,
      marginLeft: theme.Spacing.SMALL,
    },
    dropdown: {
      background: theme.Colors.WHITE,
      width: '15%'
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