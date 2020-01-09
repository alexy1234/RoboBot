/** Makes POST request to url containing data
  * @param {string} url - Url of api relative to proxy set in react-app/package.json
  * @param {string} Json data to be POSTed to api
  * @return {}
  */

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function usePostData(url, data) {
	const [res, setRes] = useState([])
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const headers = {
		'Content-Type': 'application/json',
	}

	useEffect(() => {
		setLoading(true);
		axios.post(url, 
				   data,
				   {headers: headers}).then((res) => {
			setRes(JSON.stringify(res.data));
			setLoading(false);
		}).catch(e => {
			setError(e);
		})
	}, [url]);

	return {res, loading, error};
}

export default usePostData;