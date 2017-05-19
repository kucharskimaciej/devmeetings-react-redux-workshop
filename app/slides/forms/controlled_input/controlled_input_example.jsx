import React, { Component } from 'react'

class ControlledInputExample extends Component {
    state = {
        value: ''
    }

    onInputChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <input type="text"
                   value={this.state.value}
                   onChange={this.onInputChange} />
        )
    }
}

export default ControlledInputExample
