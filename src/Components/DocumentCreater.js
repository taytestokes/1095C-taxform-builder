import React, { Component } from 'react';
import { css } from "glamor";

// Components
import DocumentForm from './DocumentForm';

// Theme
import theme from "../Constants/Theme";

class DocumentCreater extends Component {
    state = {
        step: 1,
    };

    render() {
        const styles = this.getStyles();

        return (
            <div style={styles.component}>
                <div style={styles.panel}>
                    <DocumentForm />
                </div>
            </div>
        )
    }

    getStyles = () => ({
        component: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 0,
            // background: '#f9fafb',
        },
        banner: {
            width: '100%',
            padding: theme.Spacing.SEMI_SMALL,
            borderBottom: theme.Border.DEFAULT,
            background: theme.Colors.WHITE,
        },
        innerBanner: {
            height: '5vh',
            display: 'flex',
            alignItems: 'center',
        },
        panel: {
            height: '100%',
            width: '100%',
        }
    })
}

export default DocumentCreater;