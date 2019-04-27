"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.targets = exports.domains = exports.MISMATCH = exports.PARTIAL_MATCH = exports.MATCH = exports.DEFAULT_WEIGHTS = void 0;
var DEFAULT_WEIGHTS = {
  domains: 1,
  targets: 1,
  features: 1
};
exports.DEFAULT_WEIGHTS = DEFAULT_WEIGHTS;
var MATCH = 1;
exports.MATCH = MATCH;
var PARTIAL_MATCH = 0.5;
exports.PARTIAL_MATCH = PARTIAL_MATCH;
var MISMATCH = 0;
exports.MISMATCH = MISMATCH;
var domains = {
  GENERIC: 'generic'
};
exports.domains = domains;
var targets = {
  GENERAL: 'general'
};
exports.targets = targets;