/* eslint-disable no-underscore-dangle, no-use-before-define */
import Registry from '../registry';
import Dependency from '../dependency';
import Feature from '../feature';
import { scoreSets } from './helper';
import { DEFAULT_WEIGHTS, domains, targets } from './constants';

const frameworkRegistry = new Registry(
  (framework, afterCreateCb) => new Framework(framework, afterCreateCb),
);

const createSet = obj => new Set(Array.isArray(obj) ? obj : [obj]);

export default class Framework extends Dependency {
  constructor(framework) {
    super(framework);

    this._displayName = framework.display_name;
    this.description = framework.description;
    this.domains = createSet(framework.application_area);
    this.targets = createSet(framework.target);
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

  static scoreDomains(base, other) {
    return scoreSets(base, other, domains.GENERIC);
  }

  static scoreTargets(base, other) {
    return scoreSets(base, other, targets.GENERAL);
  }

  static scoreFeatures(base, other) {
    return Object.keys(base).reduce(
      (acc, f) => acc + base[f].compare(other[f]),
      0,
    );
  }

  get displayName() {
    return this._displayName || `${this.displayAuthor}: ${this.title}`;
  }

  compare(other, weights = DEFAULT_WEIGHTS) {
    const featureCount = Math.max(
      Object.keys(this.features).length,
      Object.keys(other.features).length,
    );

    const potentialScore = weights.targets + weights.domains + weights.features * featureCount;

    const scores = {
      domains: Framework.scoreDomains(this.domains, other.domains),
      targets: Framework.scoreTargets(this.targets, other.targets),
      features: Framework.scoreFeatures(this.features, other.features),
    };

    const weightedScores = Object.keys(scores).reduce(
      (acc, k) => Object.assign(acc, { [k]: weights[k] * scores[k] }),
      {},
    );

    const matchRate = Object.values(weightedScores)
      .reduce((acc, s) => acc + s, 0) / potentialScore;

    return matchRate;
  }
}
