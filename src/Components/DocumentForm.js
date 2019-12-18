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
                    <div style={{
                        ...styles.step,
                        ...step >= 1 ? { background: '#f3f4f5' } : {},
                        borderRight: theme.Border.DEFAULT,
                    }}>
                        <div style={{
                            ...styles.stepCircle,
                            ...step >= 1 ? { background: theme.Colors.PRIMARY } : {},
                        }}>
                            <Icon.Check size={10} style={styles.stepCheck} />
                        </div>
                        <h2 style={styles.stepTitle}>Employee Information</h2>
                        <div style={{
                            ...styles.stepPoint,
                            ...step >= 1 ? { background: '#f3f4f5' } : {},
                        }} />
                    </div>
                    <div style={{
                        ...styles.step,
                        ...step >= 2 ? { background: '#f3f4f5' } : {},
                        borderRight: theme.Border.DEFAULT,
                    }}>
                        <div style={{
                            ...styles.stepCircle,
                            ...step >= 2 ? { background: theme.Colors.PRIMARY } : {},
                        }}>
                            <Icon.Check size={10} style={styles.stepCheck} />
                        </div>
                        <h2 style={styles.stepTitle}>Employer Information</h2>
                        <div style={{
                            ...styles.stepPoint,
                            ...step >= 2 ? { background: '#f3f4f5' } : {},
                        }} />
                    </div>
                    <div style={{
                        ...styles.step,
                        ...step >= 3 ? { background: '#f3f4f5' } : {},
                    }}>
                        <div style={{
                            ...styles.stepCircle,
                            ...step >= 3 ? { background: theme.Colors.PRIMARY } : {},
                        }}>
                            <Icon.Check size={10} style={styles.stepCheck} />
                        </div>
                        <h2 style={styles.stepTitle}>Offer of Coverage</h2>
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
            flexDirection: 'column',
            alignItems: 'center',
        },
        stepContainer: {
            width: '100%',
            height: '8%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            borderBottom: theme.Border.DEFAULT,
            background: theme.Colors.WHITE,
        },
        step: {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
        },
        stepCircle: {
            width: 15,
            height: 15,
            background: theme.Spacing.WHITE,
            border: `3px solid ${theme.Colors.PRIMARY}`,
            borderRadius: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        stepCheck: {
            color: theme.Colors.WHITE,
            marginTop: 1
        },
        stepTitle: {
            color: theme.FontColors.DARK,
            fontSize: theme.FontSizes.MEDIUM,
            fontWeight: 700,
            marginLeft: theme.Spacing.XSMALL,
        },
        stepPoint: {
            width: 12,
            height: 12,
            borderTop: theme.Border.DEFAULT,
            borderRight: theme.Border.DEFAULT,
            transform: 'rotate(45deg)',
            position: 'absolute',
            top: '40%',
            right: -7,
            background: theme.Colors.WHITE,
            zIndex: 10,
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