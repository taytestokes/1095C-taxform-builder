import React, { Component } from 'react'
import { css } from "glamor";
import * as Icon from "react-feather";
import axios from 'axios';
import { withRouter } from "react-router-dom";

// Theme
import theme from "../Constants/Theme";

class Navbar extends Component {

    render() {
        const styles = this.getStyles();

        return (
            <div style={styles.component}>
                {/* <button className={styles.logoutButton} onClick={this._logout}>
                    <Icon.LogOut size={16} />
                </button> */}
            </div>
        )
    }

    getStyles = () => ({
        component: {
            width: "100vw",
            height: '8vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            background: theme.Colors.WHITE,
            padding: theme.Spacing.MEDIUM,
            borderBottom: theme.Border.DEFAULT,
        },
        logoutButton: css({
            padding: `${theme.Spacing.XSMALL}px ${theme.Spacing.MEDIUM}px`,
            background: theme.Colors.PRIMARY,
            color: theme.Colors.WHITE,
            border: "none",
            borderRadius: theme.BorderRadius.SMALL,
            outline: "none",
            transition: "ease .2s",
            ":hover": {
                background: theme.Colors.HOVER_PRIMARY,
                cursor: "pointer",
            }
        })
    })
}

export default withRouter(Navbar);