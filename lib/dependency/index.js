"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/* eslint-disable no-use-before-define, no-underscore-dangle */
var dependencyRegistry = {};

var Dependency =
/*#__PURE__*/
function () {
  /*
    Private. Don't use `new Dependency` directly.
    Instead, call `Dependency.create`.
  */
  function Dependency(dependency) {
    var afterCreateHook = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    (0, _classCallCheck2["default"])(this, Dependency);
    this.id = dependency.id;
    this.title = dependency.title;
    this.authors = dependency.authors;
    this.year = dependency.year;
    this.url = dependency.url;
    afterCreateHook(this);
    this.dependencies = buildDependencies(dependency.dependencies);
  }

  (0, _createClass2["default"])(Dependency, [{
    key: "flattenedDependencies",
    value: function flattenedDependencies() {
      var visited = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
      visited.add(this);
      return Array.from(this.dependencies.reduce(function (acc, d) {
        return visited.has(d) ? acc : new Set([].concat((0, _toConsumableArray2["default"])(acc), (0, _toConsumableArray2["default"])(d.flattenedDependencies(visited))));
      }, new Set(this.dependencies)));
    }
  }], [{
    key: "create",
    value: function create(dependency) {
      var id = dependency.id;

      if (dependencyRegistry[id]) {
        return dependencyRegistry[id];
      }

      var afterCreate = function afterCreate(dep) {
        dependencyRegistry[dep.id] = dep;
      };

      return new Dependency(dependency, afterCreate);
    } // For testing purposes only

  }, {
    key: "clearRegistry",
    value: function clearRegistry() {
      dependencyRegistry = {};
    }
  }]);
  return Dependency;
}();

exports["default"] = Dependency;

var buildDependencies = function buildDependencies(deps) {
  return Array.from(deps.reduce(function (acc, d) {
    return acc.add(Dependency.create(d));
  }, new Set()));
};