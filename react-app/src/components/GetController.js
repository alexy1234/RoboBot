/** Controls and Manages client-server interactions
  */

import React from 'react';
import axios from 'axios';

class GetController extends React.Component {
	state = {
		data: [],
		loading: true,
		error: false,
	}

	componentDidMount() {
		axios.get(this.props.url).then(res => {
			this.setState({loading: false, data: JSON.stringify(res.data)});
		}).catch(error => this.setState({loading: false, error: error}))
	}

	render() {
		return (
			<div>
				{this.props.children(this.state)}
			</div>
		);
	}
}

export default GetController;