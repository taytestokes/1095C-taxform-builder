import React, { Component } from 'react'

// Components
import DocumentForm from '../Components/DocumentForm';
import Banner from '../Components/Banner';

// Theme
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
