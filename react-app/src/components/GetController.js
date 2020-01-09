/** Controls and Manages client-server interactions
  */

import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
  * Custom Hook to GET data from API
  * @param {string} url API endpoint route
  * @return {object} {response, loading flag, error}
  * @example <caption>Example usage of usePostData</caption>
  * function GetTest(){
  *   const {res, loading, e} = useGetData("/get_example");
  *
  *   return (
  *     <>
  *       {res && <p>{res}</p>}
  *       {loading && <p>{loading}</p>}
  *       {e && <p>{e}</p>}
  *     </>
  *   );
  * }
  */
function useGetData(url) {
  const [res, setRes] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(url).then((res) => {
      setRes(JSON.stringify(res.data));
      setLoading(false);
    }).catch(e => {
      setError(e);
    })
  }, [url]);

  return {res, loading, error};
}

export default useGetData;

//
//
//
//

// Deprecate component GET controller
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