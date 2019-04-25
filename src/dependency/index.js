/* eslint-disable no-use-before-define, no-underscore-dangle */
import Registry from '../registry';

const dependencyRegistry = new Registry(
  (dependency, afterCreateCb) => new Dependency(dependency, afterCreateCb),
);

export default class Dependency {
  /*
    Private. Don't use `new Dependency` directly.
    Instead, call `Dependency.create`.
  */
  constructor(dependency, afterCreateCb = () => {}) {
    this.id = dependency.id;
    this.title = dependency.title;
    this.authors = dependency.authors;
    this.year = dependency.year;
    this.url = dependency.url;

    afterCreateCb(this);

    this.dependencies = buildDependencies(dependency.dependencies);
  }

  static create(dependency) {
    return dependencyRegistry.fetchOrCreate(dependency);
  }

  // For testing purposes only
  static clearRegistry() {
    dependencyRegistry.clear();
  }

  flattenedDependencies(visited = new Set()) {
    visited.add(this);

    return Array.from(this.dependencies.reduce(
      (acc, d) => (
        visited.has(d)
          ? acc
          : new Set([...acc, ...d.flattenedDependencies(visited)])
      ),
      new Set(this.dependencies),
    ));
  }
}

const buildDependencies = deps => Array.from(
  deps.reduce(
    (acc, d) => acc.add(Dependency.create(d)),
    new Set(),
  ),
);
