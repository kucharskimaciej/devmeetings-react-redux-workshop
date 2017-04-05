import React, { Component } from 'react'

class Clicker extends Component {
    handleButtonClick = (event) => {
        console.log(event.target.textContent);
    }

    render() {
        return (
            <button onClick={this.handleButtonClick}>Click me!</button>
        )
    }
}

export default Clicker
