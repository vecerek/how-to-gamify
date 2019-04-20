"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _jsonSchemaRefParser = _interopRequireDefault(require("json-schema-ref-parser"));

var ROOT_PATH = _path["default"].resolve(__dirname, '..');

var SRC_PATH = _path["default"].resolve(ROOT_PATH, 'src');

(0, _asyncToGenerator2["default"])(
/*#__PURE__*/
_regenerator["default"].mark(function _callee() {
  var frameworksJson, frameworkSchema, frameworks;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          frameworksJson = _fs["default"].readFileSync(_path["default"].resolve(SRC_PATH, 'frameworks.json'), 'utf8');
          frameworkSchema = JSON.parse(frameworksJson);
          _context.next = 5;
          return _jsonSchemaRefParser["default"].dereference(frameworkSchema);

        case 5:
          frameworks = _context.sent;
          console.log(frameworks.definitions['2'].dependencies);
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 9]]);
}))();