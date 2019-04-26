"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _registry = _interopRequireDefault(require("../registry"));

var _dependency = _interopRequireDefault(require("../dependency"));

var _feature = _interopRequireDefault(require("../feature"));

var _helper = require("./helper");

var _constants = require("./constants");

/* eslint-disable no-underscore-dangle, no-use-before-define */
var frameworkRegistry = new _registry["default"](function (framework, afterCreateCb) {
  return new Framework(framework, afterCreateCb);
});

var createSet = function createSet(obj) {
  return new Set(Array.isArray(obj) ? obj : [obj]);
};

var Framework =
/*#__PURE__*/
function (_Dependency) {
  (0, _inherits2["default"])(Framework, _Dependency);

  function Framework(framework) {
    var _this;

    (0, _classCallCheck2["default"])(this, Framework);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Framework).call(this, framework));
    _this._displayName = framework.display_name;
    _this.description = framework.description;
    _this.domains = createSet(framework.application_area);
    _this.targets = createSet(framework.target);
    _this.features = framework.features.reduce(function (acc, f) {
      return Object.assign(acc, (0, _defineProperty2["default"])({}, f.id, new _feature["default"](f)));
    }, {});
    return _this;
  }

  (0, _createClass2["default"])(Framework, [{
    key: "compare",
    value: function compare(other) {
      var weights = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.DEFAULT_WEIGHTS;
      var featureCount = Math.max(Object.keys(this.features).length, Object.keys(other.features).length);
      var potentialScore = weights.targets + weights.domains + weights.features * featureCount;
      var scores = {
        domains: Framework.scoreDomains(this.domains, other.domains),
        targets: Framework.scoreTargets(this.targets, other.targets),
        features: Framework.scoreFeatures(this.features, other.features)
      };
      var weightedScores = Object.keys(scores).reduce(function (acc, k) {
        return Object.assign(acc, (0, _defineProperty2["default"])({}, k, weights[k] * scores[k]));
      }, {});
      var matchRate = Object.values(weightedScores).reduce(function (acc, s) {
        return acc + s;
      }, 0) / potentialScore;
      return matchRate;
    }
  }, {
    key: "displayName",
    get: function get() {
      return this._displayName || "".concat(this.displayAuthor, ": ").concat(this.title);
    }
  }], [{
    key: "create",
    value: function create(framework) {
      return frameworkRegistry.fetchOrCreate(framework);
    } // For testing purposes only

  }, {
    key: "clearRegistry",
    value: function clearRegistry() {
      frameworkRegistry.clear();
    }
  }, {
    key: "scoreDomains",
    value: function scoreDomains(base, other) {
      return (0, _helper.scoreSets)(base, other, _constants.domains.GENERIC);
    }
  }, {
    key: "scoreTargets",
    value: function scoreTargets(base, other) {
      return (0, _helper.scoreSets)(base, other, _constants.targets.GENERAL);
    }
  }, {
    key: "scoreFeatures",
    value: function scoreFeatures(base, other) {
      return Object.keys(base).reduce(function (acc, f) {
        return acc + base[f].compare(other[f]);
      }, 0);
    }
  }]);
  return Framework;
}(_dependency["default"]);

exports["default"] = Framework;