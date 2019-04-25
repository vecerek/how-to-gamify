import test from 'ava';
import Dependency from './index';

test.afterEach(() => {
  Dependency.clearRegistry();
});

test('#dependencies returns an empty array for a leaf dependency', (t) => {
  const dependency = Dependency.create({
    id: 'a',
    dependencies: [],
  });

  t.deepEqual(dependency.dependencies, []);
});

test.serial('#dependencies returns a non-empty array for a non-leaf dependency', (t) => {
  const dependency = Dependency.create({
    id: 'a',
    dependencies: [
      { id: 'b', dependencies: [] },
    ],
  });

  t.is(dependency.dependencies.length, 1);
});

test.serial('#dependencies handles circular dependencies', (t) => {
  const dependencyA = { id: 'a' };
  const dependencyC = { id: 'c', dependencies: [dependencyA] };
  const dependencyB = { id: 'b', dependencies: [dependencyC] };

  dependencyA.dependencies = [dependencyB];

  const dependency = Dependency.create(dependencyA);
  const depIds = dependency.dependencies.map(({ id }) => id);

  t.deepEqual(depIds, ['b']);
});

test.serial('#flattenedDependencies returns all nodes of the dependency tree', (t) => {
  const dependencyC = { id: 'c', dependencies: [] };
  const dependencyB = { id: 'b', dependencies: [dependencyC] };
  const dependencyA = { id: 'a', dependencies: [dependencyB] };

  const dependency = Dependency.create(dependencyA);
  const depIds = dependency.flattenedDependencies().map(({ id }) => id);

  t.deepEqual(depIds, ['b', 'c']);
});

test.serial('#flattenedDependencies handles circular dependencies', (t) => {
  const dependencyA = { id: 'a' };
  const dependencyC = { id: 'c', dependencies: [dependencyA] };
  const dependencyB = { id: 'b', dependencies: [dependencyC] };

  dependencyA.dependencies = [dependencyB];

  const dependency = Dependency.create(dependencyA);
  const depIds = dependency.flattenedDependencies().map(({ id }) => id);

  t.deepEqual(depIds.sort(), ['a', 'b', 'c'].sort());
});

test.serial('#displayAuthor returns the author\'s name when it is the only author', (t) => {
  const dependency = Dependency.create({
    id: 'a',
    authors: ['J. Smith'],
    dependencies: [],
  });

  t.is(dependency.displayAuthor, 'J. Smith');
});

test.serial('#displayAuthor returns the first author when there are multiple authors', (t) => {
  const dependency = Dependency.create({
    id: 'a',
    authors: ['J. Smith', 'J. Doe'],
    dependencies: [],
  });

  t.is(dependency.displayAuthor, 'Smith et al.');
});
