import test from 'ava';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './';

test('renders without crashing', (t) => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
  t.pass();
});
