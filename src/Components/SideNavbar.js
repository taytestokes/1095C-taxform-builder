import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as Icon from "react-feather";
import { css } from "glamor";
import FileIcon from "react-file-icon";
import { Header } from 'semantic-ui-react';

// Theme
import theme from "../Constants/Theme";

class SideNavbar extends Component {
    render() {
        const styles = this.getStyles();

        return (
            <div style={styles.component}>
                <div style={styles.logo}>
                    <div style={{ height: '5vh', display: 'flex', alignItems: 'center' }}>
                        {/* <FileIcon
                            fold={true}
                            color={theme.Colors.WHITE}
                            size={35}
                            extension="1095C"
                            labelColor={theme.Colors.PRIMARY}
                        /> */}
                    </div>
                </div>
                <NavLink to="/dashboard/documents" className={styles.navlink} activeClassName={styles.activeNavlink}>
                    <Icon.Folder size={16} />
                    <Header as="h5" style={styles.navText}>Documents</Header>
                </NavLink>
                <NavLink to="/dashboard/create" className={styles.navlink} activeClassName={styles.activeNavlink}>
                    <Icon.FilePlus size={16} />
                    <Header as="h5" style={styles.navText}>Create</Header>
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
            width: '90%',
            padding: theme.Spacing.SEMI_SMALL,
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 0,
        },
        logoText: {
            color: theme.Colors.GRAY,
            fontSize: theme.FontSizes.LARGE,
            display: 'flex',
            flexDirection: 'column',
            marginLeft: theme.Spacing.XSMALL,
            height: '100%',
            justifyContent: 'center',
            fontWeight: 400,
            paddingTop: theme.Spacing.XSMALL,
        },
        navlink: css({
            width: '90%',
            height: '5%',
            display: 'flex',
            alignItems: 'center',
            padding: theme.Spacing.SMALL,
            color: theme.Colors.GRAY,
            fontSize: theme.FontSizes.LARGE,
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
            marginTop: 0,
            color: theme.Colors.GRAY
        }
    })
}

export default SideNavbar;