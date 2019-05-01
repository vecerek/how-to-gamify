/* eslint-disable no-underscore-dangle, no-use-before-define */
import Registry from '../registry';
import Dependency from '../dependency';
import Feature from '../feature';
import { DEFAULT_WEIGHTS } from './comparison/constants';
import Comparison from './comparison';

const frameworkRegistry = new Registry(
  (framework, afterCreateCb) => new Framework(framework, afterCreateCb),
);

const createSet = obj => new Set(Array.isArray(obj) ? obj : [obj]);

export default class Framework extends Dependency {
  constructor(framework) {
    super(framework);

    this._displayName = framework.display_name;
    this.description = framework.description;
    this.domains = createSet(framework.application_area || framework.domains);
    this.targets = createSet(framework.target || framework.targets);
    this.features = framework.features.reduce(
      (acc, f) => Object.assign(acc, { [f.id]: new Feature(f) }),
      {},
    );
  }

  static create(framework) {
    return frameworkRegistry.fetchOrCreate(framework);
  }

  // For testing purposes only
  static clearRegistry() {
    frameworkRegistry.clear();
  }

  get displayName() {
    return this._displayName || `${this.displayAuthor}: ${this.title}`;
  }

  compare(other, weights = DEFAULT_WEIGHTS) {
    return new Comparison(this, other, weights);
  }
}
