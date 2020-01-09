import React, { useState, useEffect } from 'react';
import axios from 'axios';


/**
  * Custom Hook to POST data to API
  * @param {string} url API endpoint route
  * @param {object} data Data object to POST
  * @return {object} {response, loading flag, error}
  * @example <caption>Example usage of usePostData</caption>
  * function PostTest() {
  *   // Call usePostData custom hook
  *   const {res, loading, error} = usePostData("/post_example", {"name": "KEVIN"});
  *
  *   return (
  *     <>
  *       {res && <p>{res}</p>}
  *       {loading && <p>{loading}</p>}
  *       {error && <p>{error}</p>}
  *     </>
  *   )
  * }
  */
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