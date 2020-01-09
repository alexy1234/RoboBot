/** Controls and Manages client-server interactions
  */

import React from 'react';

class FetchController extends React.Component {
	state = {
		data: [],
		error: false,
		loading: true
	}

	componentDidMount() {
		fetch(this.props.url).then(res => {
			return res.json();
		})
		.then(data => this.setState({loading: false, data: data}))
		.catch(error => this.setState({loading: false, error: error}))

	}

	render() {
		return (
			this.props.children(this.state);
		);
	}
}

export default FetchController;