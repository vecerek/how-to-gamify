"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Registry =
/*#__PURE__*/
function () {
  function Registry(cb) {
    (0, _classCallCheck2["default"])(this, Registry);
    this.registry = {};
    this.cb = cb;
  }

  (0, _createClass2["default"])(Registry, [{
    key: "fetchOrCreate",
    value: function fetchOrCreate(obj) {
      var _this = this;

      if (this.registry[obj.id]) {
        return this.registry[obj.id];
      }

      return this.cb.call(null, obj, function (instance) {
        _this.registry = Object.assign({}, _this.registry, (0, _defineProperty2["default"])({}, obj.id, instance));
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this.registry = {};
    }
  }]);
  return Registry;
}();

exports["default"] = Registry;