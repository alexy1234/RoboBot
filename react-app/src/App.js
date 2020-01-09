import React from 'react';

import MainPage from "./pages/MainPage";
import GetTest from "./pages/GetTest";
import PostTest from "./pages/PostTest";

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
  	<Switch>
  		<Route exact path="/" component={MainPage} />
  		<Route exact path="/gettest" component={GetTest} />
  		<Route exact path="/posttest" component={PostTest} />
  	</Switch>
  );
}

export default App;
