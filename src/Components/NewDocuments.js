import React, { Component } from 'react'

// Components
import DocumentCreator from '../Components/DocumentCreater';

// Theme
import theme from "../Constants/Theme";

class NewDocuments extends Component {
    render() {
        const styles = this.getStyles();

        return (
            <div style={styles.component}>
                <div style={styles.banner}>
                    <div style={styles.innerBanner}>

                    </div>
                </div>
                <DocumentCreator />
            </div>
        )
    }

    getStyles = () => ({
        component: {
            width: '60vw',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: theme.Colors.WHITE,
        },
        banner: {
            width: '100%',
            padding: theme.Spacing.SEMI_SMALL,
            borderBottom: theme.Border.DEFAULT,
        },
        innerBanner: {
            width: '100%',
            height: '5vh'
        }
    })
}

export default NewDocuments;