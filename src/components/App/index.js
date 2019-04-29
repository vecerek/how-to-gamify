import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import Home from '../Home';
import GetStarted from '../GetStarted';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/get-started" component={GetStarted} />
    </Switch>
  );
}

export default connect()(App);
