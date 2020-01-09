import React from 'react';
import usePostData from '../components/PostController';

/** Demonstration of calling custom usePostData hook to POST data
  * Note that hooks can only be called inside functions.
  * Hooks cannot be called inside components. 
  * This delegates the hook as the controller and the function as the presenter
  */


function PostTest() {
  // Call usePostData custom hook
  const {res, loading, error} = usePostData("/post_example", {"name": "KEVIN"});

  return (
    <>
    {res && <p>{res}</p>}
    {loading && <p>{loading}</p>}
    {error && <p>{error}</p>}
    </>
  )
}

export default PostTest;
