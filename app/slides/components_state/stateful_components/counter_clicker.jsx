import React, { Component } from 'react'

class CounterClicker extends Component {
    state = {
        clickCount: 0
    }

    handleButtonClick = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        })
    }

    render() {
        return (
            <button onClick={this.handleButtonClick}>
                Clicked { this.state.clickCount } times!
            </button>
        )
    }
}

export default CounterClicker
