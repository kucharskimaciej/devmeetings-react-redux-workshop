class FormValidationExample extends Component {
    state = {
        name: '',
        price: '',
        errors: {}
    }

    onInputChange = ({target}) => {
        const value = target.value;
        const name = target.name;

        const errors = {
            ...this.state.errors,
            [name]: validate(name, value)
        };

        this.setState({
            [name]: value,
            errors
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <label htmlFor="name">Product name</label>
                    <input type="text" id="name"
                           name="name"
                           value={this.state.name}
                           onChange={this.onInputChange} />
                    { this.state.errors.name &&
                        <span>{this.state.errors.name}</span> }
                </div>

                <div>
                    <label htmlFor="price">Product price</label>
                    <input type="number" id="price"
                           name="price"
                           value={this.state.price}
                           onChange={this.onInputChange} />
                    { this.state.errors.price &&
                        <span>{this.state.errors.price}</span> }
                </div>

                <footer>
                    <button>Submit</button>
                </footer>
            </form>
        )
    }
}