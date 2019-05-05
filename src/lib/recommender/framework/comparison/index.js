import * as helper from './helper';
import { MISMATCH, PARTIAL_MATCH, MATCH } from './constants';
import { EXPLICIT, UNAVAILABLE } from '../../feature/constants';

export default class Comparison {
  constructor(baseFramework, otherFramework, weights) {
    this.base = baseFramework;
    this.other = otherFramework;
    this.weights = weights;
    this.domains = helper.compareDomains(this.base, this.other);
    this.targets = helper.compareTargets(this.base, this.other);
    this.features = helper.compareFeatures(this.base, this.other);
    this.score = helper.calculateScore(this, weights);
  }

  get framework() {
    return this.other;
  }

  get missingFeatures() {
    return Object.keys(this.features)
      .filter(id =>
        this.features[id] === MISMATCH
        && this.other.features[id].canonicalValue === UNAVAILABLE
      );
  }

  get partiallyMatchedFeatures() {
    return Object.keys(this.features)
      .filter(id => this.features[id] === PARTIAL_MATCH);
  }

  get matchedFeatures() {
    return Object.keys(this.features)
      .filter(id =>
        this.features[id] === MATCH
        && this.other.features[id].canonicalValue !== UNAVAILABLE
      );
  }

  get extraFeatures() {
    return Object.keys(this.features)
      .filter(id =>
        this.features[id] === MISMATCH
        && this.other.features[id].canonicalValue === EXPLICIT
      );
  }

  get missingDomains() {
    return helper.setDifference(this.base.domains, this.other.domains);
  }

  get missingTargets() {
    return helper.setDifference(this.base.targets, this.other.targets);
  }
}
