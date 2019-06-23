import {
  MATCH, PARTIAL_MATCH, MISMATCH,
} from './constants';
import { props } from '../../constants';

const compareSets = (base, other, partialConditionFn) => {
  const results = Array.from(base).reduce(
    (acc, k) => Object.assign(
      acc,
      {
        [k]: other.has(k)
          ? MATCH
          : MISMATCH,
      },
    ),
    {},
  );

  let score = Math.max(...Object.values(results));

  if (score < MATCH) {
    score = partialConditionFn()
      ? PARTIAL_MATCH
      : MISMATCH;
  }

  return Object.assign(results, { score });
};

export const compareDomains = (base, other) => compareSets(
  base.domains,
  other.domains,
  () => other.domains.has(props.domains.GENERIC),
);

export const compareTargets = (base, other) => compareSets(
  base.targets,
  other.targets,
  () => other.targets.has(props.targets.GENERAL),
);

export const compareFeatures = (base, other) => Object.keys(base.features).reduce(
  (acc, id) => Object.assign(
    acc,
    { [id]: base.features[id].compare(other.features[id]) },
  ),
  {},
);

export const calculateScore = (comparison, weights) => {
  const { domains, targets, features } = comparison;
  const domainScore = weights.domains * domains.score;
  const targetScore = weights.targets * targets.score;
  const featureScore = weights.features * Object.values(features).reduce((sum, v) => sum + v);


  const featureCnt = Object.keys(features).length;
  const potentialScore = weights.domains + weights.targets + weights.features * featureCnt;

  return (domainScore + targetScore + featureScore) / potentialScore;
};

export const setDifference = (a, b) => [...a].filter(x => !b.has(x));
