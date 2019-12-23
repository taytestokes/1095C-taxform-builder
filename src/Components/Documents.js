import React, { Component } from "react";
import { css } from "glamor";
import axios from 'axios';
import { Input } from 'semantic-ui-react';

// Components
import Document from "./Document";
import Banner from '../Components/Banner';

// Theme
import theme from "../Constants/Theme";

class Documents extends Component {
  state = {
    documents: [],
    loading: true,
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

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.component}>
        <Banner />
        <div style={styles.sectionInfo}>
          <h2 style={{ fontSize: theme.FontSizes.JUMBO, }}>Documents</h2>
          <Input placeholder="Search..." icon="search" size="tiny" iconPosition="left" style={{ marginLeft: 'auto', width: '40%' }} onChange={this._filterDocuments} />
        </div>

        <div className={styles.documents}>
          {this.state.documents.map(document => (
            <Document
              document={document}
              key={Math.floor(Math.random() * Math.floor(5000))}
            />
          ))}
        </div>
      </div >
    );
  }

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
      width: '80%',
      height: '5vh',
      marginTop: theme.Spacing.LARGE,
    },
    search: css({
      width: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      fontSize: theme.FontSizes.LARGE,
      marginLeft: theme.Spacing.SMALL
    }),
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