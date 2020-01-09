import React from 'react';
import FetchController from '../components/FetchController';

class GetTest extends React.Component {
  render() {
    return (
      <FetchController url="/get_example">
        {({loading, error, data}) => (
          <>
            { loading && <p>Loading</p> }
            { error && <p> Error: {error} </p> }
            { data.length && <p> {data} </p> } 
          </>
          )
        }
      </FetchController>
    );
  }
}

export default GetTest;
