import test from 'ava';
import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Home from './';

let shallow;

test.before(() => {
  shallow = createShallow();
});

test('renders without crashing', (t) => {
  const wrapper = shallow(<Home />);
  t.pass();
});
