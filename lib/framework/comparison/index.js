"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var helper = _interopRequireWildcard(require("./helper"));

var Comparison =
/*#__PURE__*/
function () {
  function Comparison(baseFramework, otherFramework, weights) {
    (0, _classCallCheck2["default"])(this, Comparison);
    this.base = baseFramework;
    this.other = otherFramework;
    this.weights = weights;
    this.domains = helper.compareDomains(this.base, this.other);
    this.targets = helper.compareTargets(this.base, this.other);
    this.features = helper.compareFeatures(this.base, this.other);
    this.score = helper.calculateScore(this, weights);
  }

  (0, _createClass2["default"])(Comparison, [{
    key: "missingDomains",
    get: function get() {
      return helper.setDifference(this.base.domains, this.other.domains);
    }
  }, {
    key: "missingTargets",
    get: function get() {
      return helper.setDifference(this.base.targets, this.other.targets);
    }
  }]);
  return Comparison;
}();

exports["default"] = Comparison;