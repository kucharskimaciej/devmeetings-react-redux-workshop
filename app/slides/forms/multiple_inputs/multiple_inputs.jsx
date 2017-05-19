import React, { Component } from 'react'


class MultipleInputsExample extends Component {
    state = {
        name: '',
        price: ''
    }

    onInputChange = ({target}) => {
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <section>
                <div>
                    <label htmlFor="name">Product name</label>
                    <input type="text" id="name"
                           name="name"
                           value={this.state.name}
                           onChange={this.onInputChange} />
                </div>

                <div>
                    <label htmlFor="price">Product price</label>
                    <input type="number" id="price"
                           name="price"
                           value={this.state.price}
                           onChange={this.onInputChange} />
                </div>
            </section>
        )
    }
}

export default MultipleInputsExample
