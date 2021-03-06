import Framework from './framework';
import ReferenceFramework from './framework/reference-framework';
import loadData from './utils';
import * as patterns from './framework/comparison/constants';
import { props } from './constants';

export default class Recommender {
  constructor(frameworks, reference) {
    this.reference = ReferenceFramework.create(reference);
    this.frameworks = frameworks.map(f => Framework.create(f));
  }

  static availableDomains() {
    return Object.values(props.domains);
  }

  static availableTargets() {
    return Object.values(props.targets);
  }

  static async loadFeatures() {
    return await loadData('features');
  }

  static async loadFrameworks() {
    return await loadData('frameworks');
  }

  get results() {
    return Promise.resolve(
      this.frameworks
        .map(f => this.reference.compare(f))
        .sort((a, b) => b.score - a.score)
    );
  }
}

Recommender.MATCH = patterns.MATCH;
Recommender.PARTIAL_MATCH = patterns.PARTIAL_MATCH;
Recommender.MISMATCH = patterns.MISMATCH;
