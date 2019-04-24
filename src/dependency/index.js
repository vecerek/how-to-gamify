/* eslint-disable no-use-before-define, no-underscore-dangle */

let dependencyRegistry = {};

export default class Dependency {
  /*
    Private. Don't use `new Dependency` directly.
    Instead, call `Dependency.create`.
  */
  constructor(dependency, afterCreateHook = () => {}) {
    this.id = dependency.id;
    this.title = dependency.title;
    this.authors = dependency.authors;
    this.year = dependency.year;
    this.url = dependency.url;

    afterCreateHook(this);

    this.dependencies = buildDependencies(dependency.dependencies);
  }

  static create(dependency) {
    const { id } = dependency;

    if (dependencyRegistry[id]) {
      return dependencyRegistry[id];
    }

    const afterCreate = (dep) => {
      dependencyRegistry[dep.id] = dep;
    };

    return new Dependency(dependency, afterCreate);
  }

  // For testing purposes only
  static clearRegistry() {
    dependencyRegistry = {};
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
