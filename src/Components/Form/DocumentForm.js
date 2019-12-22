import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react';
import { css } from 'glamor';

// Theme
import theme from "../../Constants/Theme";

class DocumentForm extends Component {
    render() {
        const styles = this.getStyles();

        return (
            <div style={styles.component}>
                <div style={styles.banner}>
                    <div style={{ height: '5vh' }}>

                    </div>
                </div>

                <div className={styles.formContainer}>
                    <Form size="tiny" style={styles.form}>
                        {/* Part One: Employee Section */}
                        <div style={styles.formSection}>
                            <div style={styles.labelContainer}>
                                <h2 style={styles.label}>Employee Information</h2>
                                <h3 style={styles.subLabel}> Part One</h3>
                            </div>
                            <div style={{ width: '100%', paddingLeft: theme.Spacing.SEMI_SMALL }}>
                                <Form.Group>
                                    <Form.Input width={6} required label="1: First" placeholder="First Name" />
                                    <Form.Input width={6} required label="1: Middle" placeholder="Middle Name" />
                                    <Form.Input width={6} required label="1: Last" placeholder="Last Name" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input required width={4} label="2: Social Security" placeholder="SSN" />
                                    <Form.Input required width={12} label="3: Street Address" placeholder="Street Address" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input width={6} required label="4: City" placeholder="City or Town" />
                                    <Form.Input width={6} required label="5: State" placeholder="State or Province" />
                                    <Form.Input width={6} required label="6: Zipcode" placeholder="Zipcode" />
                                </Form.Group>
                            </div>
                        </div>
                        {/* Part One: Employer Section */}
                        <div style={styles.formSection}>
                            <div style={styles.labelContainer}>
                                <h2 style={styles.label}>Employer Information</h2>
                                <h3 style={styles.subLabel}> Part One</h3>
                            </div>
                            <div style={{ width: '100%', paddingLeft: theme.Spacing.SEMI_SMALL }}>
                                <Form.Group>
                                    <Form.Input required width={6} label="7: Name" placeholder="Name" />
                                    <Form.Input required width={10} label="8: Identification Number" placeholder="Identification Number" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input required width={12} label="9: Street Address" placeholder="Street Address" />
                                    <Form.Input required width={4} label="10: Phone Number" placeholder="Phone Number" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input required width={6} label="11: City" placeholder="City or Town" />
                                    <Form.Input required width={6} label="12: State" placeholder="State or Province" />
                                    <Form.Input required width={6} label="13: Zipcode" placeholder="Zipcode" />
                                </Form.Group>
                            </div>
                        </div>
                        {/*  Part Two: Employee Offer of Coverage*/}
                        <div style={styles.formSection}>
                            <div style={styles.labelContainer}>
                                <h2 style={styles.label}>Employee Offer Of Coverage</h2>
                                <h3 style={styles.subLabel}> Part Two</h3>
                            </div>
                            <div style={{ width: '100%', paddingLeft: theme.Spacing.SEMI_SMALL }}>
                                <Form.Group widths="equal">
                                    <Form.Select fluid required label="14: Jan" />
                                    <Form.Select fluid required label="14: Feb" />
                                    <Form.Select fluid required label="14: Mar" />
                                    <Form.Select fluid required label="14: Apr" />
                                    <Form.Select fluid required label="14: May" />
                                    <Form.Select fluid required label="14: June" />
                                </Form.Group>
                                <Form.Group widths="equal">
                                    <Form.Select fluid required label="14: July" />
                                    <Form.Select fluid required label="14: Aug" />
                                    <Form.Select fluid required label="14: Sept" />
                                    <Form.Select fluid required label="14: Oct" />
                                    <Form.Select fluid required label="14: Nov" />
                                    <Form.Select fluid required label="14: Dec" />
                                </Form.Group>
                            </div>
                        </div>
                        {/* Part Two: Employee Contribution */}
                        <div style={styles.formSection}>
                            <div style={styles.labelContainer}>
                                <h2 style={styles.label}>Employee Required Contribution</h2>
                                <h3 style={styles.subLabel}> Part Two</h3>
                            </div>
                            <div style={{ width: '100%', paddingLeft: theme.Spacing.SEMI_SMALL }}>
                                <Form.Group>
                                    <Form.Input required width={4} label="15: Jan" placeholder="$0.0" />
                                    <Form.Input required width={4} label="15: Feb" placeholder="$0.0" />
                                    <Form.Input required width={4} label="15: Mar" placeholder="$0.0" />
                                    <Form.Input required width={4} label="15: Apr" placeholder="$0.0" />
                                    <Form.Input required width={4} label="15: May" placeholder="$0.0" />
                                    <Form.Input required width={4} label="15: June" placeholder="$0.0" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input required width={4} label="15: July" placeholder="$0.0" />
                                    <Form.Input required width={4} label="15: Aug" placeholder="$0.0" />
                                    <Form.Input required width={4} label="15: Sept" placeholder="$0.0" />
                                    <Form.Input required width={4} label="15: Oct" placeholder="$0.0" />
                                    <Form.Input required width={4} label="15: Nov" placeholder="$0.0" />
                                    <Form.Input required width={4} label="15: Dec" placeholder="$0.0" />
                                </Form.Group>
                            </div>
                        </div>
                        {/* Part Two: Section 4980H */}
                        {/*  Part Two: Employee Offer of Coverage*/}
                        <div style={styles.formSection}>
                            <div style={styles.labelContainer}>
                                <h2 style={styles.label}>Section 4980H Safe Harbor And Other Relief</h2>
                                <h3 style={styles.subLabel}>Part Two</h3>
                            </div>
                            <div style={{ width: '100%', paddingLeft: theme.Spacing.SEMI_SMALL }}>
                                <Form.Group widths="equal">
                                    <Form.Select fluid required label="16: Jan" />
                                    <Form.Select fluid required label="16: Feb" />
                                    <Form.Select fluid required label="16: Mar" />
                                    <Form.Select fluid required label="16: Apr" />
                                    <Form.Select fluid required label="16: May" />
                                    <Form.Select fluid required label="16: June" />
                                </Form.Group>
                                <Form.Group widths="equal">
                                    <Form.Select fluid required label="16: July" />
                                    <Form.Select fluid required label="16: Aug" />
                                    <Form.Select fluid required label="16: Sept" />
                                    <Form.Select fluid required label="16: Oct" />
                                    <Form.Select fluid required label="16: Nov" />
                                    <Form.Select fluid required label="16: Dec" />
                                </Form.Group>
                            </div>
                        </div>
                    </Form>
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
        banner: {
            width: '100%',
            padding: theme.Spacing.SEMI_SMALL,
            borderBottom: theme.Border.DEFAULT,
            background: theme.Colors.WHITE,
        },
        formContainer: css({
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'auto'
        }),
        form: {
            width: '75%',
        },
        formInput: {
            height: 15,
            fontFamily: theme.FontFamily.DEFAULT,
        },
        formSection: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            padding: theme.Spacing.SEMI_SMALL,
            paddingBottom: theme.Spacing.LARGE,
            borderBottom: theme.Border.DEFAULT,
            marginTop: theme.Spacing.LARGE,
        },
        labelContainer: {
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
        },
        label: {
            fontSize: theme.FontSizes.XLARGE,
            fontWeight: 600,
        },
        subLabel: {
            fontSize: theme.FontSizes.SMALL,
            color: theme.FontColors.GRAY,
        },
        formButtons: {
            padding: `${theme.Spacing.SEMI_SMALL}px 0`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
        }
    })
}

export default DocumentForm;