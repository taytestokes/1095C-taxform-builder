import React, { Component } from "react";
import { css } from "glamor";
import axios from 'axios';
import { Input, Transition } from 'semantic-ui-react';

// Components
import Document from "./Document";
import Banner from '../Components/Banner';
import ZeroState from '../Components/DocumentsZeroState';

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

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.component}>
        <Banner />
        <div style={styles.sectionInfo}>
          <h2 style={{ fontSize: theme.FontSizes.JUMBO, }}>Documents</h2>
          <Input placeholder="Search..." icon="search" size="mini" iconPosition="left" style={{ marginLeft: 'auto', width: '40%' }} />
        </div>

        <div className={styles.documents}>
          <Transition.Group duration={150}>
            {this.state.documents.map(document => (
              <Document
                document={document}
                key={Math.floor(Math.random() * Math.floor(5000))}
              />
            ))}
          </Transition.Group>
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