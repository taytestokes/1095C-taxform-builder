import React, { Component } from 'react'
import * as Icon from "react-feather";

// Theme
import theme from "../Constants/Theme";

class DocumentForm extends Component {
    state = {
        step: 1,

    }

    render() {
        const styles = this.getStyles();
        const { step } = this.state;

        return (
            <div style={styles.component} onClick={() => this.setState({ step: this.state.step + 1 })}>
                <div style={styles.stepContainer}>
                    <div style={styles.stepLine}>
                        <div style={{
                            ...styles.stepLineButton, ...step >= 1 ? { background: theme.Colors.PRIMARY } : {}
                        }}>
                            <Icon.Check size={10} style={styles.stepCheck} />
                            <h2 style={styles.stepTitle}>Employee Information</h2>
                        </div>
                        <div style={{
                            ...styles.stepLineButton, ...step >= 2 ? { background: theme.Colors.PRIMARY } : {}
                        }}>
                            <Icon.Check size={10} style={styles.stepCheck} />
                            <h2 style={styles.stepTitle}>Employer Information</h2>
                        </div>
                        <div style={{
                            ...styles.stepLineButton, ...step >= 3 ? { background: theme.Colors.PRIMARY } : {}
                        }}>
                            <Icon.Check size={10} style={styles.stepCheck} />
                            <h2 style={styles.stepTitle}>Employee Offer Of Coverage</h2>
                        </div>
                    </div>
                </div>
                <div style={styles.formContainer}>
                    <div style={styles.form}>

                    </div>
                    <div style={styles.stepController} >

                    </div>
                </div>
            </div>
        )
    }

    getStyles = () => ({
        component: {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
        },
        stepContainer: {
            width: '20%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        stepLine: {
            height: '50%',
            width: 2,
            background: '#e6e6e6',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        stepLineButton: {
            height: 15,
            width: 15,
            background: theme.Colors.WHITE,
            border: `2px solid ${theme.Colors.PRIMARY}`,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            position: 'relative',
        },
        stepCheck: {
            color: theme.Colors.WHITE,
            marginTop: 1
        },
        stepTitle: {
            color: theme.FontColors.DARK,
            fontSize: theme.FontSizes.MEDIUM,
            fontWeight: 700,
            position: 'absolute',
            left: 20,
        },
        formContainer: {
            width: '80%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        form: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        stepController: {},
    })
}

export default DocumentForm;