import test from 'ava';
import Framework from './index';

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

test('#compare with default weights returns the correct comparison object', (t) => {
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
  t.deepEqual(frameworkA.compare(frameworkB).score, 3.5 / 7);
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
  t.is(frameworkA.compare(frameworkB, weights).score, 6.5 / 14);
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
