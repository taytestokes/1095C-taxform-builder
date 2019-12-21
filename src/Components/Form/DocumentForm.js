import React, { Component } from 'react'
import * as Icon from "react-feather";
import { Form } from 'semantic-ui-react';

// Theme
import theme from "../../Constants/Theme";

// Components
import StepOne from './StepOne';
import StepTwo from './StepTwo';

class DocumentForm extends Component {
    state = {
        step: 1,
    }

    render() {
        const styles = this.getStyles();
        const { step } = this.state;

        return (
            <div style={styles.component}>
                <div style={styles.banner}>
                    <div style={{ height: '5vh' }}>

                    </div>
                </div>
                <div style={styles.form}>
                    {/* Employee Section */}
                    <div style={styles.formSection}>
                        <div style={styles.labelContainer}>
                            <h2 style={styles.label}>Employee Information</h2>
                        </div>
                        <Form size={'tiny'} style={{ width: '100%', paddingLeft: theme.Spacing.SEMI_SMALL }}>
                            <Form.Group>
                                <Form.Input width={6} required label="First" placeholder="First Name" />
                                <Form.Input width={6} required label="Middle" placeholder="Middle Name" />
                                <Form.Input width={6} required label="Last" placeholder="Last Name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input required width={4} label="Social Security" placeholder="SSN" />
                                <Form.Input required width={12} label="Street Address" placeholder="Street Address" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input width={6} required label="City" placeholder="City or Town" />
                                <Form.Input width={6} required label="State" placeholder="State or Province" />
                                <Form.Input width={6} required label="Zipcode" placeholder="Zipcode" />
                            </Form.Group>
                        </Form>
                    </div>
                    {/* Employer Section */}
                    <div style={styles.formSection}>
                        <div style={styles.labelContainer}>
                            <h2 style={styles.label}>Employer Information</h2>
                        </div>
                        <Form size={'tiny'} style={{ width: '100%', paddingLeft: theme.Spacing.SEMI_SMALL }}>
                            <Form.Group>
                                <Form.Input required width={6} label="Name" placeholder="Name" />
                                <Form.Input required width={10} label="Identification Number" placeholder="Identification Number" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input required width={12} label="Street Address" placeholder="Street Address" />
                                <Form.Input required width={4} label="Phone Number" placeholder="Phone Number" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input required width={6} label="City" placeholder="City or Town" />
                                <Form.Input required width={6} label="State" placeholder="State or Province" />
                                <Form.Input required width={6} label="Zipcode" placeholder="Zipcode" />
                            </Form.Group>
                        </Form>
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
        banner: {
            width: '100%',
            padding: theme.Spacing.SEMI_SMALL,
            borderBottom: theme.Border.DEFAULT,
            background: theme.Colors.WHITE,
        },
        form: {
            width: '75%',
            // background: theme.Colors.WHITE,
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
            paddingBottom: 0,
            borderBottom: theme.Border.DEFAULT,
            marginTop: theme.Spacing.SMALL,
        },
        labelContainer: {
            width: '30%',
        },
        label: {
            fontSize: theme.FontSizes.XLARGE,
            fontWeight: 600,
        }
    })
}

export default DocumentForm;