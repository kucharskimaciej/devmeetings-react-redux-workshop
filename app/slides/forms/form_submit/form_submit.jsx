class FormSubmitExample extends Component {
    state = {
        name: ''
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(`Hello, ${this.state.name}!`);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <label htmlFor="name">Product name</label>
                    <input type="text" id="name" name="name" value={this.state.name} onChange={this.onInputChange} />
                </div>
                <footer>
                    <button>Submit!</button>
                </footer>
            </form>
        )
    }

    onInputChange = ({target}) => {
        const value = target.value;

        this.setState({
            name: value
        });
    }
}