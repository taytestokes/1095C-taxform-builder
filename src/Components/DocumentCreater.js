import React, { Component } from 'react';

// Components
import DocumentForm from '../Components/DocumentForm';

// Theme
import theme from "../Constants/Theme";

class DocumentCreater extends Component {
    render() {
        const styles = this.getStyles();

        return (
            <div style={styles.component}>
                <div style={styles.banner}>
                    <div style={styles.innerBanner}>

                    </div>
                </div>
                <div style={styles.panel}>
                    <DocumentForm />
                </div>
            </div>
        )
    }

    getStyles = () => ({
        component: {
            width: "60vw",
            height: "100%",
            borderRight: theme.Border.DEFAULT,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 0
        },
        banner: {
            width: '100%',
            padding: theme.Spacing.SEMI_SMALL,
            borderBottom: theme.Border.DEFAULT,
        },
        innerBanner: {
            height: '5vh'
        },
        panel: {
            height: '100%',
            width: '100%',
            padding: theme.Spacing.SEMI_SMALL,
        }
    })
}

export default DocumentCreater;