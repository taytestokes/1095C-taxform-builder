import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as Icon from "react-feather";
import { css } from "glamor";

// Theme
import theme from "../Constants/Theme";

class SideNavbar extends Component {
    render() {
        const styles = this.getStyles();

        return (
            <div style={styles.component}>
                <div style={styles.logo}>
                    {/* Site Logo Will Be Displayed Here */}
                </div>
                <NavLink to="/dashboard/documents" className={styles.navlink} activeClassName={styles.activeNavlink}>
                    <Icon.Folder size={14} />
                    <h2 style={styles.navText}>Documents</h2>
                </NavLink>
                <NavLink to="/dashboard/create" className={styles.navlink} activeClassName={styles.activeNavlink}>
                    <Icon.FilePlus size={14} />
                    <h2 style={styles.navText}>Create</h2>
                </NavLink>
            </div>
        )
    }

    getStyles = () => ({
        component: {
            width: '15vw',
            height: '100%',
            background: '#1b1c1d',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
        },
        logo: {
            width: 50,
            height: 50,
            color: theme.Colors.WHITE,
            marginTop: theme.Spacing.SMALL,
        },
        navlink: css({
            width: '90%',
            height: '5%',
            display: 'flex',
            alignItems: 'center',
            padding: theme.Spacing.SMALL,
            color: theme.Colors.GRAY,
            fontSize: theme.FontSizes.MEDIUM,
            fontWeight: 600,
            borderRadius: `3px 0 0 3px`,
            transition: 'ease .2s',
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
        }
    })
}

export default SideNavbar;