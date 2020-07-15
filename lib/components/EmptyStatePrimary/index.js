"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _isString = _interopRequireDefault(require("lodash/isString"));

var _ButtonPrimary = _interopRequireDefault(require("../ButtonPrimary"));

var _GridContainer = _interopRequireDefault(require("../GridContainer"));

var _GridItem = _interopRequireDefault(require("../GridItem"));

var _TypographyBase = _interopRequireDefault(require("../TypographyBase"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @prettier
 */
var EmptyStatePrimary = function EmptyStatePrimary(_ref) {
  var buttonProps = _ref.buttonProps,
      description = _ref.description,
      Icon = _ref.Icon,
      style = _ref.style,
      title = _ref.title;
  var classes = (0, _styles["default"])();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.container,
    style: style
  }, Icon && /*#__PURE__*/React.createElement(Icon, {
    classes: {
      root: (0, _clsx["default"])(classes.iconRoot)
    },
    color: "disabled",
    titleAccess: (0, _isString["default"])(title) ? title : undefined
  }), title && /*#__PURE__*/React.createElement(_GridContainer["default"], {
    alignItems: "center",
    classes: {
      container: (0, _clsx["default"])(classes.titleGridContainer)
    },
    justify: "center"
  }, /*#__PURE__*/React.createElement(_GridItem["default"], {
    classes: {
      item: classes.titleGridItem
    }
  }, /*#__PURE__*/React.createElement(_TypographyBase["default"], {
    align: "center",
    variant: "h6"
  }, title))), description && /*#__PURE__*/React.createElement(_TypographyBase["default"], {
    align: "center",
    classes: {
      root: (0, _clsx["default"])(classes.descriptionRoot, !title && classes.descriptionRootWithoutTitle)
    },
    variant: "body1"
  }, description), buttonProps && /*#__PURE__*/React.createElement(_ButtonPrimary["default"], buttonProps));
};

var _default = EmptyStatePrimary;
exports["default"] = _default;