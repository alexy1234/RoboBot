import React from 'react';
import FetchController from '../components/FetchController';

class GetTest extends React.Component {
  render() {
    return (
      <FetchController url="/get_example">
      </FetchController>
    );
  }
}

export default GetTest;
