import React, { Component } from 'react'
import { css } from "glamor";

// Theme
import theme from "../../Constants/Theme";

class StepOne extends Component {
    render() {
        const styles = this.getStyles();

        return (
            <div style={styles.component}>
                <h2 style={styles.label}>Employee Name</h2>
                <div style={styles.inputContainer}>
                    <input
                        placeholder="First Name"
                        className={styles.input}
                        style={{
                            width: '47%'
                        }}
                    />
                    <input
                        placeholder="M"
                        className={styles.input}
                        style={{
                            width: '4%'
                        }}
                    />
                    <input
                        placeholder="Last Name"
                        className={styles.input}
                        style={{
                            width: '47%'
                        }}
                    />
                </div>


                <div style={{
                    ...styles.inputContainer,
                    marginTop: '0px',
                }}>
                    <div style={{
                        ...styles.veticalInputContainer,
                        width: '69%',
                    }}>
                        <h2 style={styles.label}>Billing Address</h2>
                        <input
                            placeholder="Street Adress"
                            className={styles.input}
                            style={{
                                width: '100%',
                                marginTop: theme.Spacing.XSMALL,
                            }}
                        />
                    </div>

                    <div style={{
                        ...styles.veticalInputContainer,
                        width: '30%',
                    }}>
                        <h2 style={styles.label}>Social Security Number</h2>
                        <input
                            placeholder="SSN"
                            className={styles.input}
                            style={{
                                width: '100%',
                                marginTop: theme.Spacing.XSMALL,
                            }}
                        />
                    </div>
                </div>

                <div style={{
                    ...styles.inputContainer,
                    marginTop: '0px',
                }}>
                    <div style={{
                        ...styles.veticalInputContainer,
                        width: '55%',
                    }}>
                        <h2 style={styles.label}>City or Town</h2>
                        <input
                            placeholder="City or Town"
                            className={styles.input}
                            style={{
                                width: '100%',
                                marginTop: theme.Spacing.XSMALL,
                            }}
                        />
                    </div>

                    <div style={{
                        ...styles.veticalInputContainer,
                        width: '15%',
                    }}>
                        <h2 style={styles.label}>State</h2>
                        <input
                            placeholder="State"
                            className={styles.input}
                            style={{
                                width: '100%',
                                marginTop: theme.Spacing.XSMALL,
                            }}
                        />

                    </div>

                    <div style={{
                        ...styles.veticalInputContainer,
                        width: '28%',
                    }}>
                        <h2 style={styles.label}>Zipcode</h2>
                        <input
                            placeholder="Zipcode"
                            className={styles.input}
                            style={{
                                width: '100%',
                                marginTop: theme.Spacing.XSMALL,
                            }}
                        />
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
            alignItems: 'left',
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