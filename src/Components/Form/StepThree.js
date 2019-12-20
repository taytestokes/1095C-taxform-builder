import React, { Component } from 'react'

// Theme
import theme from "../../Constants/Theme";

class StepThree extends Component {
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
            height: '100%'
        }
    })
}

export default StepThree;