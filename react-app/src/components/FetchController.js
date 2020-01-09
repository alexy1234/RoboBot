/** Controls and Manages client-server interactions
  */

import React from 'react';
import axios from 'axios';

class FetchController extends React.Component {
	state = {
		loading: true,
		error: false,
		data: []
	}

	componentDidMount() {
		axios.get(this.props.url).then(res => {
			this.setState({loading: false, data: res.data});
		}).catch(error => this.setState({loading: false, error: error}))
	}

	render() {
		return (
			<ul>
				{ this.state.data.map(data => <li>{data.name}</li>) }
			</ul>
		);
	}
}

export default FetchController;