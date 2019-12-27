import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

// Theme
import theme from "../Constants/Theme";

class Banner extends Component {

    _logOut = () => {
        axios
            .get("/auth/logout")
            .then(() => {
                this.props.history.push("/");
            });
    };

    render() {
        const styles = this.getStyles();

        return (
            <div style={styles.banner}>
                <div style={styles.innerBanner}>
                    <Button basic size="mini" icon="sign-in" onClick={this._logOut} />
                </div>
            </div>
        )
    }

    getStyles = () => ({
        banner: {
            width: "100%",
            padding: theme.Spacing.SEMI_SMALL,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: theme.BackgroundColors.LIGHT,
            borderBottom: theme.Border.DEFAULT
        },
        innerBanner: {
            width: "100%",
            height: "5vh",
            display: "flex",
            alignItems: "center",
            justifyContent: 'flex-end',
            padding: theme.Spacing.SMALL
        },
    })
}

export default withRouter(Banner);