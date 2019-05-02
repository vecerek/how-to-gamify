import test from 'ava';
import Comparison from './index';
import Framework from '../index';
import {
  DEFAULT_WEIGHTS, MATCH, PARTIAL_MATCH, MISMATCH,
} from './constants';

const frameworkA = Framework.create({
  application_area: ['business'],
  target: ['designer', 'researcher'],
  features: [
    { id: 'a', value: 'E' },
    { id: 'b', value: 'I' },
    { id: 'c', value: 'U' },
    { id: 'd', value: 'E' },
    { id: 'e', value: 'I' },
  ],
});

const frameworkB = Framework.create({
  application_area: ['generic'],
  target: ['researcher'],
  features: [
    { id: 'a', value: 'U' },
    { id: 'b', value: 'E' },
    { id: 'c', value: 'E' },
    { id: 'd', value: 'E' },
    { id: 'e', value: 'E' },
  ],
});

test('initializes comparison object correcty', (t) => {
  const comparison = new Comparison(frameworkA, frameworkB, DEFAULT_WEIGHTS);

  t.is(comparison.base, frameworkA);
  t.is(comparison.other, frameworkB);
  t.deepEqual(comparison.domains, {
    business: MISMATCH,
    score: PARTIAL_MATCH,
  });
  t.deepEqual(comparison.targets, {
    designer: MISMATCH,
    researcher: MATCH,
    score: MATCH,
  });
  t.deepEqual(comparison.features, {
    a: MISMATCH,
    b: PARTIAL_MATCH,
    c: MISMATCH,
    d: MATCH,
    e: PARTIAL_MATCH,
  });
  t.is(comparison.score, 3.5 / 7);
});

test('#missingDomains returns the difference in domains', (t) => {
  const comparison = new Comparison(frameworkA, frameworkB);

  t.deepEqual(comparison.missingDomains, ['business']);
});

test('#missingTargets returns the difference in targets', (t) => {
  const comparison = new Comparison(frameworkA, frameworkB);

  t.deepEqual(comparison.missingTargets, ['designer']);
});

test.todo('#missingFeatures returns a list of feature ids that are missing from the compared framework');
test.todo('#partiallyMatchedFeatures returns a list of feature ids that have a partial match with the framework');
test.todo('#matchedFeatures returns a list of feature ids that match with the framework');
test.todo('#extraFeatures returns a list of feature ids that are explicit in the compared framework but not in the reference framework');
