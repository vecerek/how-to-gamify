import * as helper from './helper';

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

  get missingDomains() {
    return helper.setDifference(this.base.domains, this.other.domains);
  }

  get missingTargets() {
    return helper.setDifference(this.base.targets, this.other.targets);
  }
}
