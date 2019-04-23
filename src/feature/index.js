/* eslint-disable no-underscore-dangle */
import { EXPLICIT, IMPLICIT, UNAVAILABLE } from './constants';

const PERMITTED_VALUES = [EXPLICIT, IMPLICIT, UNAVAILABLE];

const _validate = Symbol('validate');

export default class Feature {
  constructor({ id, value }) {
    this.id = id;
    this.canonicalValue = value;
    this[_validate]();
  }

  get value() {
    switch (this.canonicalValue) {
      case EXPLICIT:
        return 1;
      case IMPLICIT:
        return 0.5;
      case UNAVAILABLE:
      default:
        return 0;
    }
  }

  compareTo(otherFeature) {
    if (this.canonicalValue === UNAVAILABLE) {
      return otherFeature.canonicalValue === UNAVAILABLE
        ? 1
        : 0;
    }

    return 1 - Math.abs(this.value - otherFeature.value);
  }

  // private methods

  [_validate]() {
    if (!PERMITTED_VALUES.includes(this.canonicalValue)) {
      throw new Error(`"${this.canonicalValue}" is not permitted as a feature value.`);
    }
  }
}
