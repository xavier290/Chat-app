/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkchat_app"] = self["webpackChunkchat_app"] || []).push([["chat_app_frontend_src_components_layout_login_js"],{

/***/ "./node_modules/@material-ui/icons/ArrowRight.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/ArrowRight.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar React = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ \"./node_modules/@material-ui/icons/utils/createSvgIcon.js\"));\n\nvar _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement(\"path\", {\n  d: \"M10 17l5-5-5-5v10z\"\n}), 'ArrowRight');\n\nexports.default = _default;\n\n//# sourceURL=webpack://chat-app/./node_modules/@material-ui/icons/ArrowRight.js?");

/***/ }),

/***/ "./chat_app/frontend/src/components/layout/login.js":
/*!**********************************************************!*\
  !*** ./chat_app/frontend/src/components/layout/login.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Login\": () => (/* binding */ Login),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/auth */ \"./chat_app/frontend/src/actions/auth.js\");\n/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowRight */ \"./node_modules/@material-ui/icons/ArrowRight.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\nvar Login = /*#__PURE__*/function (_Component) {\n  _inherits(Login, _Component);\n\n  var _super = _createSuper(Login);\n\n  function Login() {\n    var _temp, _this;\n\n    _classCallCheck(this, Login);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.state = {\n      username: \"\",\n      password: \"\"\n    }, _this.onSubmit = function (e) {\n      e.preventDefault();\n\n      _this.props.login(_this.state.username, _this.state.password);\n    }, _this.onChange = function (e) {\n      return _this.setState(_defineProperty({}, e.target.name, e.target.value));\n    }, _temp));\n  }\n\n  _createClass(Login, [{\n    key: \"render\",\n    value: function render() {\n      if (this.props.isAuthenticated) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Redirect, {\n          to: \"/chat\"\n        });\n      }\n\n      var _this$state = this.state,\n          username = _this$state.username,\n          password = _this$state.password;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n        className: \"form-section\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"register-part\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, \"Hello There!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"If you don't have an account, create one and stay connected forever through the hub, with just a few clicks.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n        className: \"btn\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n        to: \"/register\"\n      }, \"Sign Up\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6__.default, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n        id: \"login\",\n        onSubmit: this.onSubmit\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"Login\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Username\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n        type: \"text\",\n        name: \"username\",\n        onChange: this.onChange,\n        value: username,\n        required: \"True\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n        type: \"password\",\n        name: \"password\",\n        onChange: this.onChange,\n        value: password,\n        autoComplete: \"true\",\n        required: \"True\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n        className: \"small-text\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"em\", null, \"Don't have an account? \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"em\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n        className: \"link\",\n        to: \"/register\"\n      }, \"Register\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n        className: \"btn loginBtn\",\n        type: \"submit\"\n      }, \"Login\")));\n    }\n  }]);\n\n  return Login;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\nLogin.propTypes = {\n  login: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),\n  isAuthenticated: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    isAuthenticated: state.auth.isAuthenticated\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {\n  login: _actions_auth__WEBPACK_IMPORTED_MODULE_3__.login\n})(Login));\n\n//# sourceURL=webpack://chat-app/./chat_app/frontend/src/components/layout/login.js?");

/***/ })

}]);