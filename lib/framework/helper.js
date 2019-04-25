"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scoreSets = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _constants = require("./constants");

/* eslint-disable import/prefer-default-export */
var intersection = function intersection(setA, setB) {
  return new Set((0, _toConsumableArray2["default"])(setA).filter(function (member) {
    return setB.has(member);
  }));
};

var scoreSets = function scoreSets(base, other) {
  var partial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (intersection(base, other).size > 0) {
    return _constants.MATCH;
  }

  if (partial && other.has(partial)) {
    return _constants.PARTIAL_MATCH;
  }

  return _constants.MISMATCH;
};

exports.scoreSets = scoreSets;