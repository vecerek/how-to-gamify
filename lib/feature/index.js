"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _constants = require("./constants");

/* eslint-disable no-underscore-dangle */
var PERMITTED_VALUES = [_constants.EXPLICIT, _constants.IMPLICIT, _constants.UNAVAILABLE];

var _validate = Symbol('validate');

var Feature =
/*#__PURE__*/
function () {
  function Feature(_ref) {
    var id = _ref.id,
        value = _ref.value;
    (0, _classCallCheck2["default"])(this, Feature);
    this.id = id;
    this.canonicalValue = value;

    this[_validate]();
  }

  (0, _createClass2["default"])(Feature, [{
    key: "compareTo",
    value: function compareTo(otherFeature) {
      if (this.canonicalValue === _constants.UNAVAILABLE) {
        return otherFeature.canonicalValue === _constants.UNAVAILABLE ? 1 : 0;
      }

      return 1 - Math.abs(this.value - otherFeature.value);
    } // private methods

  }, {
    key: _validate,
    value: function value() {
      if (!PERMITTED_VALUES.includes(this.canonicalValue)) {
        throw new Error("\"".concat(this.canonicalValue, "\" is not permitted as a feature value."));
      }
    }
  }, {
    key: "value",
    get: function get() {
      switch (this.canonicalValue) {
        case _constants.EXPLICIT:
          return 1;

        case _constants.IMPLICIT:
          return 0.5;

        case _constants.UNAVAILABLE:
        default:
          return 0;
      }
    }
  }]);
  return Feature;
}();

exports["default"] = Feature;