import React from 'react';
import useGetData from '../components/GetController';

function GetTest(){
  const {res, loading, e} = useGetData("/get_example");

  return (
    <>
      {res && <p>{res}</p>}
      {loading && <p>{loading}</p>}
      {e && <p>{e}</p>}
    </>
  );
}

export default GetTest;


// Deprecate Get example
// <GetController url="/get_example">
//       {({loading, error, data}) => (
//          <>
//            // && operator renders iff both operands are true
//            { loading && <p>Loading</p> }
//            { error && <p> Error: {error} </p> }
//            { data.length && <p> {data} </p> } 
//          </>
//          )
//        }
//      </GetController>