"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = _interopRequireDefault(require("path"));

var _jsonSchemaRefParser = _interopRequireDefault(require("json-schema-ref-parser"));

/* eslint-disable no-console */
var DATA_PATH = _path["default"].resolve(__dirname, '..', 'data');

(function () {
  var _run = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var frameworksPath, frameworks;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            frameworksPath = _path["default"].resolve(DATA_PATH, 'frameworks.json');
            _context.next = 4;
            return _jsonSchemaRefParser["default"].dereference(frameworksPath);

          case 4:
            frameworks = _context.sent;
            console.log(frameworks['1'].features);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  function run() {
    return _run.apply(this, arguments);
  }

  return run;
})()();