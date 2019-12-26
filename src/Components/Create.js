import React, { Component } from 'react'

// Components
import DocumentForm from './DocumentForm';
import Banner from './Banner';

// Constants
import theme from "../Constants/Theme";

export default class Upload extends Component {
    render() {
        const styles = this.getStyles();

        return (
            <div style={styles.component}>
                <Banner />
                <DocumentForm />
            </div>
        )
    }

    getStyles = () => ({
        component: {
            width: '100%',
            height: '100%',
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    })
}
