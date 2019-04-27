"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDifference = exports.calculateScore = exports.compareFeatures = exports.compareTargets = exports.compareDomains = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _constants = require("./constants");

var compareSets = function compareSets(base, other, partialConditionFn) {
  var results = Array.from(base).reduce(function (acc, k) {
    return Object.assign(acc, (0, _defineProperty2["default"])({}, k, other.has(k) ? _constants.MATCH : _constants.MISMATCH));
  }, {});
  var score = Math.max.apply(Math, (0, _toConsumableArray2["default"])(Object.values(results)));

  if (score < _constants.MATCH) {
    score = partialConditionFn() ? _constants.PARTIAL_MATCH : _constants.MISMATCH;
  }

  return Object.assign(results, {
    score: score
  });
};

var compareDomains = function compareDomains(base, other) {
  return compareSets(base.domains, other.domains, function () {
    return other.domains.has(_constants.props.domains.GENERIC);
  });
};

exports.compareDomains = compareDomains;

var compareTargets = function compareTargets(base, other) {
  return compareSets(base.targets, other.targets, function () {
    return other.targets.has(_constants.props.targets.GENERAL);
  });
};

exports.compareTargets = compareTargets;

var compareFeatures = function compareFeatures(base, other) {
  return Object.keys(base.features).reduce(function (acc, id) {
    return Object.assign(acc, (0, _defineProperty2["default"])({}, id, base.features[id].compare(other.features[id])));
  }, {});
};

exports.compareFeatures = compareFeatures;

var calculateScore = function calculateScore(comparison) {
  var weights = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.DEFAULT_WEIGHTS;
  var domains = comparison.domains,
      targets = comparison.targets,
      features = comparison.features;
  var domainScore = weights.domains * Math.max.apply(Math, (0, _toConsumableArray2["default"])(Object.values(domains)));
  var targetScore = weights.targets * Math.max.apply(Math, (0, _toConsumableArray2["default"])(Object.values(targets)));
  var featureScore = weights.features * Object.values(features).reduce(function (sum, v) {
    return sum + v;
  });
  var featureCnt = Object.keys(features).length;
  var potentialScore = weights.domains + weights.targets + weights.features * featureCnt;
  return (domainScore + targetScore + featureScore) / potentialScore;
};

exports.calculateScore = calculateScore;

var setDifference = function setDifference(a, b) {
  return (0, _toConsumableArray2["default"])(a).filter(function (x) {
    return !b.has(x);
  });
};

exports.setDifference = setDifference;