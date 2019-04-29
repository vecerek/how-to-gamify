import Framework from './framework';
import ReferenceFramework from './framework/reference-framework'

export default class Recommender {
  constructor(frameworks, reference) {
    this.reference = ReferenceFramework.create(reference);
    this.frameworks = frameworks.map(f => Framework.create(f));
  }

  get results() {
    return this.frameworks
      .map(f => this.reference.compare(f))
      .sort((a, b) => b.score - a.score);
  }
}
