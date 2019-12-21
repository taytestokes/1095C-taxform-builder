import React, { Component } from 'react'

// Components
import DocumentForm from '../Components/Form/DocumentForm';

// Theme
import theme from "../Constants/Theme";

export default class Upload extends Component {
    render() {
        const styles = this.getStyles();

        return (
            <div style={styles.component}>
                <DocumentForm />
            </div>
        )
    }

    getStyles = () => ({
        component: {
            width: '100%',
            height: '100%',
        },
    })
}
