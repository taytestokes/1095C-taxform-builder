import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as Icon from "react-feather";
import { css } from "glamor";
import axios from 'axios';
import { withRouter } from 'react-router-dom';

// Theme
import theme from "../Constants/Theme";

class SideNavbar extends Component {
    /* Custom Methods */
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
            <div style={styles.component}>
                <div style={styles.logo}>
                    {/* Site Logo Will Be Displayed Here */}
                </div>
                <NavLink to="/dashboard/home" className={styles.navlink} activeClassName={styles.activeNavlink}>
                    <Icon.Home size={14} />
                    <h2 style={styles.navText}>Home</h2>
                </NavLink>
                <NavLink to="/dashboard/documents" className={styles.navlink} activeClassName={styles.activeNavlink}>
                    <Icon.Folder size={14} />
                    <h2 style={styles.navText}>Documents</h2>
                </NavLink>
                <NavLink to="/dashboard/upload" className={styles.navlink} activeClassName={styles.activeNavlink}>
                    <Icon.FilePlus size={14} />
                    <h2 style={styles.navText}>Upload</h2>
                </NavLink>
                <div className={styles.logout} onClick={this._logOut}>
                    <Icon.LogIn size={14} />
                    <h2 style={styles.navText}>Sign Out</h2>
                </div>
            </div>
        )
    }

    getStyles = () => ({
        component: {
            width: '10vw',
            height: '100%',
            background: '#1b1c1d',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        logo: {
            width: 50,
            height: 50,
            color: theme.Colors.WHITE,
            marginTop: theme.Spacing.SMALL,
        },
        navlink: css({
            width: '90%',
            height: '4%',
            display: 'flex',
            alignItems: 'center',
            padding: theme.Spacing.SMALL,
            color: theme.Colors.GRAY,
            fontSize: theme.FontSizes.MEDIUM,
            fontWeight: 600,
            borderRadius: theme.BorderRadius.SMALL,
            transition: 'ease .2s',
            marginTop: theme.Spacing.SMALL,
            ":hover": {
                color: theme.Colors.GRAY,
            }
        }),
        activeNavlink: css({
            color: theme.Colors.WHITE,
            background: '#f3f4f525',
        }),
        navText: {
            marginLeft: theme.Spacing.SMALL,
        },
        logout: css({
            width: '90%',
            height: '6%',
            display: 'flex',
            alignItems: 'center',
            padding: theme.Spacing.SMALL,
            color: theme.Colors.GRAY,
            fontSize: theme.FontSizes.MEDIUM,
            fontWeight: 600,
            borderRadius: theme.BorderRadius.SMALL,
            transition: 'ease .2s',
            marginTop: 'auto',
            ":hover": {
                cursor: 'pointer',
                color: theme.Colors.PRIMARY,
            }
        })
    })
}

export default withRouter(SideNavbar);