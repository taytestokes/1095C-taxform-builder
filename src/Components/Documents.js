import React, { Component } from "react";
import { css } from "glamor";
import axios from 'axios';
import { Input, Pagination, Icon, Button } from 'semantic-ui-react';

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
    axios.get("/documents/all")
      .then(({ data }) => {
        this.setState({
          documents: data,
        })
      });
  };

  _filterDocuments = evt => {
    const { value } = evt.target;

    axios.get("/documents/all")
      .then(response => {
        const { data } = response;

        if (value === "") {
          return this.setState({
            documents: data
          });
        }

        const filteredDocuments = data.filter(document =>
          document.filename.toLowerCase().includes(value.toLowerCase())
        );

        this.setState({
          documents: filteredDocuments
        });
      });
  };

  _handlePageChange = (evt, data) => {
    this.setState({
      currentPage: data.activePage
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
              key={Math.floor(Math.random() * Math.floor(5000))}
            />
          ))}
        </div>
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