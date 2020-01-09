import React from 'react';
import usePostData from '../components/PostController';

// Demonstrating usage of usePostData
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
