import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import Home from '../Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default connect()(App);
