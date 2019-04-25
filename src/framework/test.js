import test from 'ava';
import Framework from './index';
import { MATCH, PARTIAL_MATCH, MISMATCH } from './constants';

test.afterEach(() => Framework.clearRegistry());

test('initializes object successfully', (t) => {
  t.notThrows(() => {
    const framework = Framework.create({
      application_area: ['generic'],
      target: ['general'],
      features: [
        { id: 'objectives', value: 'E' },
        { id: 'risk', value: 'I' },
      ],
    });

    t.is(framework.domains.has('generic'), true);
    t.is(framework.targets.has('general'), true);
    t.truthy(framework.features.objectives);
    t.truthy(framework.features.risk);
  });
});

test('#scoreTargets returns "MISMATCH" if there is no common member', (t) => {
  t.is(
    Framework.scoreTargets(
      new Set(['designer', 'software developer']),
      new Set(['researcher']),
    ),
    MISMATCH,
  );
});

test('#scoreTargets returns "MATCH" if there is at least one common member', (t) => {
  t.is(
    Framework.scoreTargets(
      new Set(['designer', 'software developer']),
      new Set(['designer', 'researcher']),
    ),
    MATCH,
  );
});

test('#scoreTargets returns "PARTIAL MATCH" if there is no common member and the other set contains "general"', (t) => {
  t.is(
    Framework.scoreTargets(
      new Set(['designer', 'software developer']),
      new Set(['general']),
    ),
    PARTIAL_MATCH,
  );
});

test('#scoreDomains returns "MISMATCH" if there is no common member', (t) => {
  t.is(
    Framework.scoreDomains(
      new Set(['generic']),
      new Set(['business']),
    ),
    MISMATCH,
  );
});

test('#scoreDomains returns "MATCH" if there is at least one common member', (t) => {
  t.is(
    Framework.scoreDomains(
      new Set(['business']),
      new Set(['business']),
    ),
    MATCH,
  );
});

test('#scoreDomains returns "PARTIAL MATCH" if there is no common member and the other set contains "generic"', (t) => {
  t.is(
    Framework.scoreDomains(
      new Set(['business']),
      new Set(['generic']),
    ),
    PARTIAL_MATCH,
  );
});

test('#scoreFeatures returns the sum of individual feature comparison results', (t) => {
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

  // 2 partial matches (0.5) and a complete match (1) => 2*0.5 + 1 = 2
  t.is(Framework.scoreFeatures(frameworkA.features, frameworkB.features), 2);
});

test('#compare with the default weights returns the correct result', (t) => {
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

  /*
    Domain: partial match => s(d): 0.5 * w(d)
    Target: full match => s(t): 1 * w(t)
    Features: 2 partial matches, 1 full match => s(f): 2 * w(f)
    Total: sum of scores (s(d) + s(t) + s(f)) / sum of max potential scores (w(d)+w(t)+|f|*w(f))
   */
  t.deepEqual(frameworkA.compare(frameworkB), 3.5 / 7);
});

test('#compare with custom weights returns the correct result', (t) => {
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

  const weights = {
    domains: 3,
    targets: 1,
    features: 2,
  };

  /*
    Domain: partial match => 0.5 * 3 = 1.5
    Target: full match => 1 * 1 = 1
    Features: 2 partial matches, 1 full match => 2 * 2 = 4
    Total: sum of scores (1.5 + 1 + 4) / sum of max potential scores (3 + 1 + 5*2)
   */
  t.is(frameworkA.compare(frameworkB, weights), 6.5 / 14);
});

test('#displayName returns the display_name when available', (t) => {
  const framework = Framework.create({
    id: 'frameworkA',
    display_name: 'Framework A',
    title: 'The title of the paper/book the framework had been published in',
    authors: ['J. Smith'],
    application_area: [],
    target: [],
    features: [],
  });

  t.is(framework.displayName, 'Framework A');
});

test('#displayName returns a combination of author and title when display name is not available', (t) => {
  const framework = Framework.create({
    id: 'frameworkA',
    title: 'The title of the paper/book the framework had been published in',
    authors: ['J. Smith'],
    application_area: [],
    target: [],
    features: [],
  });

  t.is(framework.displayName, 'J. Smith: The title of the paper/book the framework had been published in');
});
