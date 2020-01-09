import React from 'react';
import GetController from '../components/GetController';

class GetTest extends React.Component {
  render() {
    return (
      <GetController url="/get_example">
        {({loading, error, data}) => (
          <>
            // && operator renders iff both operands are true
            { loading && <p>Loading</p> }
            { error && <p> Error: {error} </p> }
            { data.length && <p> {data} </p> } 
          </>
          )
        }
      </GetController>
    );
  }
}

export default GetTest;
