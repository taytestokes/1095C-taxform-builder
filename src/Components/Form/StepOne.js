import React, { Component } from 'react';
import { css } from "glamor";


// Theme
import theme from "../../Constants/Theme";

class StepOne extends Component {
    render() {
        const styles = this.getStyles();

        return (
            <div style={styles.component}>

            </div>
        )
    }

    getStyles = () => ({
        component: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
        },
        formInput: {
            height: '4vh',
        },
        category: {
            borderBottom: theme.Border.DEFAULT,
            padding: `${theme.Spacing.XSMALL}px 0px`
        },
        categoryTitle: {
            fontSize: theme.FontSizes.XLARGE,
            fontWeight: 600,
            marginTop: theme.Spacing.MEDIUM,
        },
        label: {
            fontSize: theme.FontSizes.MEDIUM,
            fontWeight: 600,
            marginTop: theme.Spacing.MEDIUM,
        },
        input: css({
            border: theme.Border.DEFAULT,
            borderRadius: theme.BorderRadius.SMALL,
            outline: 'none',
            transition: 'ease .2s',
            padding: theme.Padding.INPUT,
            fontSize: theme.FontSizes.MEDIUM,
            ':focus': {
                border: theme.Border.FOCUS,
            }
        }),
        inputContainer: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: theme.Spacing.XSMALL,
        },
        veticalInputContainer: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
    })
}

export default StepOne;