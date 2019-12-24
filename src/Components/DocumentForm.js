import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react';
import { css } from 'glamor';
import axios from 'axios';
import swal from "@sweetalert/with-react";

// Constants
import theme from "../Constants/Theme";
import { offerOfCoverageOptions, section4980HOptions } from '../Constants/Options';

class DocumentForm extends Component {
    state = {
        employee_first_name: '',
        employee_middle_name: '',
        employee_last_name: '',
        employee_ssn: '',
        employee_address: '',
        employee_city: '',
        employee_state: '',
        employee_zipcode: '',
        employers_name: '',
        employers_id: '',
        employers_address: '',
        employers_phone_number: '',
        employers_city: '',
        employers_state: '',
        employers_zipcode: '',
        jan_14: '',
        feb_14: '',
        mar_14: '',
        apr_14: '',
        may_14: '',
        jun_14: '',
        jul_14: '',
        aug_14: '',
        sep_14: '',
        oct_14: '',
        nov_14: '',
        dec_14: '',
        jan_15: '',
        feb_15: '',
        mar_15: '',
        apr_15: '',
        may_15: '',
        jun_15: '',
        jul_15: '',
        aug_15: '',
        sep_15: '',
        oct_15: '',
        nov_15: '',
        dec_15: '',
        jan_16: '',
        feb_16: '',
        mar_16: '',
        apr_16: '',
        may_16: '',
        jun_16: '',
        jul_16: '',
        aug_16: '',
        sep_16: '',
        oct_16: '',
        nov_16: '',
        dec_16: '',
    };

    _handleInputChange = evt => {
        const { value, name } = evt.target;
        this.setState({
            [name]: value
        });
    };

    _handleDropDownChange = (evt, result) => {
        const { name, value } = result;
        this.setState({
            [name]: value
        });
    };

    _handleCreateDocument = () => {
        axios.post("/documents/create", this.state)
            .then(() => {
                this.setState({
                    employee_first_name: '',
                    employee_middle_name: '',
                    employee_last_name: '',
                    employee_ssn: '',
                    employee_address: '',
                    employee_city: '',
                    employee_state: '',
                    employee_zipcode: '',
                    employers_name: '',
                    employers_id: '',
                    employers_address: '',
                    employers_phone_number: '',
                    employers_city: '',
                    employers_state: '',
                    employers_zipcode: '',
                    jan_14: '',
                    feb_14: '',
                    mar_14: '',
                    apr_14: '',
                    may_14: '',
                    jun_14: '',
                    jul_14: '',
                    aug_14: '',
                    sep_14: '',
                    oct_14: '',
                    nov_14: '',
                    dec_14: '',
                    jan_15: '',
                    feb_15: '',
                    mar_15: '',
                    apr_15: '',
                    may_15: '',
                    jun_15: '',
                    jul_15: '',
                    aug_15: '',
                    sep_15: '',
                    oct_15: '',
                    nov_15: '',
                    dec_15: '',
                    jan_16: '',
                    feb_16: '',
                    mar_16: '',
                    apr_16: '',
                    may_16: '',
                    jun_16: '',
                    jul_16: '',
                    aug_16: '',
                    sep_16: '',
                    oct_16: '',
                    nov_16: '',
                    dec_16: '',
                })
            });
    };

    _handleCancel = evt => {
        evt.preventDefault()

        swal("Are you sure you want to cancel?", {
            buttons: {
                cancel: "Nevermind",
                confirm: {
                    text: "Yes",
                    value: "confirm"
                }
            }
        })
            .then(value => {
                switch (value) {
                    case "confirm":
                        this.setState({
                            employee_first_name: '',
                            employee_middle_name: '',
                            employee_last_name: '',
                            employee_ssn: '',
                            employee_address: '',
                            employee_city: '',
                            employee_state: '',
                            employee_zipcode: '',
                            employers_name: '',
                            employers_id: '',
                            employers_address: '',
                            employers_phone_number: '',
                            employers_city: '',
                            employers_state: '',
                            employers_zipcode: '',
                            jan_14: '',
                            feb_14: '',
                            mar_14: '',
                            apr_14: '',
                            may_14: '',
                            jun_14: '',
                            jul_14: '',
                            aug_14: '',
                            sep_14: '',
                            oct_14: '',
                            nov_14: '',
                            dec_14: '',
                            jan_15: '',
                            feb_15: '',
                            mar_15: '',
                            apr_15: '',
                            may_15: '',
                            jun_15: '',
                            jul_15: '',
                            aug_15: '',
                            sep_15: '',
                            oct_15: '',
                            nov_15: '',
                            dec_15: '',
                            jan_16: '',
                            feb_16: '',
                            mar_16: '',
                            apr_16: '',
                            may_16: '',
                            jun_16: '',
                            jul_16: '',
                            aug_16: '',
                            sep_16: '',
                            oct_16: '',
                            nov_16: '',
                            dec_16: '',
                        })
                    default:
                        return;
                }
            });
    }

    render() {
        const styles = this.getStyles();

        return (
            <div style={styles.component}>
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
                                    <Form.Input width={6} required label="1: First" placeholder="First Name" onChange={this._handleInputChange} name="employee_first_name" value={this.state.employee_first_name} />
                                    <Form.Input width={6} required label="1: Middle" placeholder="Middle Name" onChange={this._handleInputChange} name="employee_middle_name" value={this.state.employee_middle_name} />
                                    <Form.Input width={6} required label="1: Last" placeholder="Last Name" onChange={this._handleInputChange} name="employee_last_name" value={this.state.employee_last_name} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input required width={4} label="2: Social Security" placeholder="SSN" onChange={this._handleInputChange} name="employee_ssn" value={this.state.employee_ssn} />
                                    <Form.Input required width={12} label="3: Street Address" placeholder="Street Address" onChange={this._handleInputChange} name="employee_address" value={this.state.employee_address} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input width={6} required label="4: City" placeholder="City or Town" onChange={this._handleInputChange} name="employee_city" value={this.state.employee_city} />
                                    <Form.Input width={6} required label="5: State" placeholder="State or Province" onChange={this._handleInputChange} name="employee_state" value={this.state.employee_state} />
                                    <Form.Input width={6} required label="6: Zipcode" placeholder="Zipcode" onChange={this._handleInputChange} name="employee_zipcode" value={this.state.employee_zipcode} />
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
                                    <Form.Input required width={6} label="7: Name" placeholder="Name" name="employers_name" onChange={this._handleInputChange} value={this.state.employers_name} />
                                    <Form.Input required width={10} label="8: Identification Number" placeholder="Identification Number" name="employers_id" onChange={this._handleInputChange} value={this.state.employers_id} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input required width={12} label="9: Street Address" placeholder="Street Address" name="employers_address" onChange={this._handleInputChange} value={this.state.employers_address} />
                                    <Form.Input required width={4} label="10: Phone Number" placeholder="Phone Number" name="employers_phone_number" onChange={this._handleInputChange} value={this.state.employers_phone_number} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input required width={6} label="11: City" placeholder="City or Town" name="employers_city" onChange={this._handleInputChange} value={this.state.employers_city
                                    } />
                                    <Form.Input required width={6} label="12: State" placeholder="State or Province" name="employers_state" onChange={this._handleInputChange} value={this.state.employers_state} />
                                    <Form.Input required width={6} label="13: Zipcode" placeholder="Zipcode" name="employers_zipcode" onChange={this._handleInputChange} value={this.state.employers_zipcode} />
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
                                    <Form.Select fluid required label="14: Jan" placeholder="1A" options={offerOfCoverageOptions} name="jan_14" onChange={this._handleDropDownChange} value={this.state.jan_14} />
                                    <Form.Select fluid required label="14: Feb" placeholder="1A" options={offerOfCoverageOptions} name="feb_14" onChange={this._handleDropDownChange} value={this.state.feb_14} />
                                    <Form.Select fluid required label="14: Mar" placeholder="1A" options={offerOfCoverageOptions} name="mar_14" onChange={this._handleDropDownChange} value={this.state.mar_14} />
                                    <Form.Select fluid required label="14: Apr" placeholder="1A" options={offerOfCoverageOptions} name="apr_14" onChange={this._handleDropDownChange} value={this.state.apr_14} />
                                    <Form.Select fluid required label="14: May" placeholder="1A" options={offerOfCoverageOptions} name="may_14" onChange={this._handleDropDownChange} value={this.state.may_14} />
                                    <Form.Select fluid required label="14: June" placeholder="1A" options={offerOfCoverageOptions} name="jun_14" onChange={this._handleDropDownChange} value={this.state.jun_14} />
                                </Form.Group>
                                <Form.Group widths="equal">
                                    <Form.Select fluid required label="14: July" placeholder="1A" options={offerOfCoverageOptions} name="jul_14" onChange={this._handleDropDownChange} value={this.state.jul_14} />
                                    <Form.Select fluid required label="14: Aug" placeholder="1A" options={offerOfCoverageOptions} name="aug_14" onChange={this._handleDropDownChange} value={this.state.aug_14} />
                                    <Form.Select fluid required label="14: Sept" placeholder="1A" options={offerOfCoverageOptions} name="sep_14" onChange={this._handleDropDownChange} value={this.state.sep_14} />
                                    <Form.Select fluid required label="14: Oct" placeholder="1A" options={offerOfCoverageOptions} name="oct_14" onChange={this._handleDropDownChange} value={this.state.oct_14} />
                                    <Form.Select fluid required label="14: Nov" placeholder="1A" options={offerOfCoverageOptions} name="nov_14" onChange={this._handleDropDownChange} value={this.state.nov_14} />
                                    <Form.Select fluid required label="14: Dec" placeholder="1A" options={offerOfCoverageOptions} name="dec_14" onChange={this._handleDropDownChange} value={this.state.dec_14} />
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
                                    <Form.Input required width={4} label="15: Jan" placeholder="$0.00" onChange={this._handleInputChange} name="jan_15" value={this.state.jan_15} />
                                    <Form.Input required width={4} label="15: Feb" placeholder="$0.00" onChange={this._handleInputChange} name="feb_15" value={this.state.feb_15} />
                                    <Form.Input required width={4} label="15: Mar" placeholder="$0.00" onChange={this._handleInputChange} name="mar_15" value={this.state.mar_15} />
                                    <Form.Input required width={4} label="15: Apr" placeholder="$0.00" onChange={this._handleInputChange} name="apr_15" value={this.state.apr_15} />
                                    <Form.Input required width={4} label="15: May" placeholder="$0.00" onChange={this._handleInputChange} name="may_15" value={this.state.may_15} />
                                    <Form.Input required width={4} label="15: June" placeholder="$0.00" onChange={this._handleInputChange} name="jun_15" value={this.state.jun_15} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input required width={4} label="15: July" placeholder="$0.00" onChange={this._handleInputChange} name="jul_15" value={this.state.jul_15} />
                                    <Form.Input required width={4} label="15: Aug" placeholder="$0.00" onChange={this._handleInputChange} name="aug_15" value={this.state.aug_15} />
                                    <Form.Input required width={4} label="15: Sept" placeholder="$0.00" onChange={this._handleInputChange} name="sep_15" value={this.state.sep_15} />
                                    <Form.Input required width={4} label="15: Oct" placeholder="$0.00" onChange={this._handleInputChange} name="oct_15" value={this.state.oct_15} />
                                    <Form.Input required width={4} label="15: Nov" placeholder="$0.00" onChange={this._handleInputChange} name="nov_15" value={this.state.nov_15} />
                                    <Form.Input required width={4} label="15: Dec" placeholder="$0.00" onChange={this._handleInputChange} name="dec_15" value={this.state.dec_15} />
                                </Form.Group>
                            </div>
                        </div>
                        {/* Part Two: Section 4980H */}
                        <div style={styles.formSection}>
                            <div style={styles.labelContainer}>
                                <h2 style={styles.label}>Section 4980H Safe Harbor And Other Relief</h2>
                                <h3 style={styles.subLabel}>Part Two</h3>
                            </div>
                            <div style={{ width: '100%', paddingLeft: theme.Spacing.SEMI_SMALL }}>
                                <Form.Group widths="equal">
                                    <Form.Select fluid required label="16: Jan" options={section4980HOptions} placeholder="2A" onChange={this._handleDropDownChange} name="jan_16" value={this.state.jan_16} />
                                    <Form.Select fluid required label="16: Feb" options={section4980HOptions} placeholder="2A" onChange={this._handleDropDownChange} name="feb_16" value={this.state.feb_16} />
                                    <Form.Select fluid required label="16: Mar" options={section4980HOptions} placeholder="2A" onChange={this._handleDropDownChange} name="mar_16" value={this.state.mar_16} />
                                    <Form.Select fluid required label="16: Apr" options={section4980HOptions} placeholder="2A" onChange={this._handleDropDownChange} name="apr_16" value={this.state.apr_16} />
                                    <Form.Select fluid required label="16: May" options={section4980HOptions} placeholder="2A" onChange={this._handleDropDownChange} name="may_16" value={this.state.may_16} />
                                    <Form.Select fluid required label="16: June" options={section4980HOptions} placeholder="2A" onChange={this._handleDropDownChange} name="jun_16" value={this.state.jun_16} />
                                </Form.Group>
                                <Form.Group widths="equal">
                                    <Form.Select fluid required label="16: July" options={section4980HOptions} placeholder="2A" onChange={this._handleDropDownChange} name="jul_16" value={this.state.jul_16} />
                                    <Form.Select fluid required label="16: Aug" options={section4980HOptions} placeholder="2A" onChange={this._handleDropDownChange} name="aug_16" value={this.state.aug_16} />
                                    <Form.Select fluid required label="16: Sept" options={section4980HOptions} placeholder="2A" onChange={this._handleDropDownChange} name="sep_16" value={this.state.sep_16} />
                                    <Form.Select fluid required label="16: Oct" options={section4980HOptions} placeholder="2A" onChange={this._handleDropDownChange} name="oct_16" value={this.state.oct_16} />
                                    <Form.Select fluid required label="16: Nov" options={section4980HOptions} placeholder="2A" onChange={this._handleDropDownChange} name="nov_16" value={this.state.nov_16} />
                                    <Form.Select fluid required label="16: Dec" options={section4980HOptions} placeholder="2A" onChange={this._handleDropDownChange} name="dec_16" value={this.state.dec_16} />
                                </Form.Group>
                            </div>
                        </div>
                        <div style={styles.actionContainer}>
                            <Button onClick={this._handleCancel} size="tiny">Cancel</Button>
                            <Button primary onClick={this._handleCreateDocument} size="tiny" type="submit">Create</Button>
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
        actionContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '100%',
            height: '5vh',
            marginTop: theme.Spacing.XLARGE,
            paddingBottom: theme.Spacing.XLARGE,

        },
        formContainer: css({
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }),
        form: {
            width: '80%',
        },
        formInput: {
            height: 15,
            fontFamily: theme.FontFamily.DEFAULT,
        },
        formSection: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: theme.Spacing.SEMI_SMALL,
            paddingBottom: theme.Spacing.LARGE,
            borderBottom: theme.Border.DEFAULT,
            marginTop: theme.Spacing.LARGE,
        },
        labelContainer: {
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            paddingRight: theme.Spacing.SEMI_SMALL,
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
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
        }
    })
}

export default DocumentForm;