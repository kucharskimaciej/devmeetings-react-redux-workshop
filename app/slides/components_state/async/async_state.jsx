class AsyncList extends Component {
    componentDidMount() {
        API.loadPosts()
            .then(posts => this.setState({ posts }))
    }

    render() {
        if (this.state.posts) {
            return (
                <List items={this.state.posts} />
            )
        }

        return <p>Loading...</p>;
    }
}
