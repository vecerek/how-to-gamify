/* eslint-disable import/prefer-default-export */
import { MATCH, PARTIAL_MATCH, MISMATCH } from './constants';

const intersection = (setA, setB) => new Set(
  [...setA].filter(member => setB.has(member)),
);

export const scoreSets = (base, other, partial = null) => {
  if (intersection(base, other).size > 0) {
    return MATCH;
  }

  if (partial && other.has(partial)) {
    return PARTIAL_MATCH;
  }

  return MISMATCH;
};
