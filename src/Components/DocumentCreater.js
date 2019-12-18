import React, { Component } from 'react'

// Theme
import theme from "../Constants/Theme";

class DocumentCreater extends Component {
    render() {
        const styles = this.getStyles();

        return (
            <div style={styles.component}>

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
            padding: theme.Spacing.LARGE,
            paddingTop: 0
        },
    })
}

export default DocumentCreater;