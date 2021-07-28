/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkchat_app"] = self["webpackChunkchat_app"] || []).push([["chat_app_frontend_src_components_layout_register_js"],{

/***/ "./chat_app/frontend/src/components/layout/register.js":
/*!*************************************************************!*\
  !*** ./chat_app/frontend/src/components/layout/register.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Register\": () => (/* binding */ Register),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/auth */ \"./chat_app/frontend/src/actions/auth.js\");\n/* harmony import */ var _actions_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/messages */ \"./chat_app/frontend/src/actions/messages.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\nvar Register = /*#__PURE__*/function (_Component) {\n  _inherits(Register, _Component);\n\n  var _super = _createSuper(Register);\n\n  function Register() {\n    var _temp, _this;\n\n    _classCallCheck(this, Register);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.state = {\n      username: \"\",\n      email: \"\",\n      password: \"\",\n      password2: \"\"\n    }, _this.onSubmit = function (e) {\n      e.preventDefault();\n      var _this$state = _this.state,\n          username = _this$state.username,\n          email = _this$state.email,\n          password = _this$state.password,\n          password2 = _this$state.password2;\n\n      if (password !== password2) {\n        _this.props.createMessage({\n          passwordNotMatch: \"Passwords do not match\"\n        });\n      } else {\n        var newUser = {\n          username: username,\n          password: password,\n          email: email\n        };\n\n        _this.props.register(newUser);\n      }\n    }, _this.onChange = function (e) {\n      return _this.setState(_defineProperty({}, e.target.name, e.target.value));\n    }, _temp));\n  }\n\n  _createClass(Register, [{\n    key: \"render\",\n    value: function render() {\n      if (this.props.isAuthenticated) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Redirect, {\n          to: \"/chat\"\n        });\n      }\n\n      var _this$state2 = this.state,\n          username = _this$state2.username,\n          email = _this$state2.email,\n          password = _this$state2.password,\n          password2 = _this$state2.password2;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n        className: \"form-section\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n        onSubmit: this.onSubmit,\n        id: \"register\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"Register\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Username\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n        type: \"text\",\n        name: \"username\",\n        onChange: this.onChange,\n        required: \"True\",\n        value: username\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Email\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n        type: \"email\",\n        name: \"email\",\n        onChange: this.onChange,\n        required: \"True\",\n        value: email\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n        type: \"password\",\n        name: \"password\",\n        onChange: this.onChange,\n        value: password,\n        autoComplete: \"tel\",\n        required: \"True\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Confirm password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n        type: \"password\",\n        name: \"password2\",\n        onChange: this.onChange,\n        value: password2,\n        autoComplete: \"tel\",\n        required: \"True\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n        className: \"small-text\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"em\", null, \"When registering you agree to our terms of service \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"em\", null, \"Already have an account?\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {\n        to: \"/login\",\n        className: \"link\"\n      }, \"Login\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n        className: \"btn\",\n        type: \"submit\"\n      }, \"Register\")));\n    }\n  }]);\n\n  return Register;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\nRegister.propTypes = {\n  register: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),\n  isAuthenticated: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    isAuthenticated: state.auth.isAuthenticated\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, {\n  register: _actions_auth__WEBPACK_IMPORTED_MODULE_3__.register,\n  createMessage: _actions_messages__WEBPACK_IMPORTED_MODULE_4__.createMessage\n})(Register));\n\n//# sourceURL=webpack://chat-app/./chat_app/frontend/src/components/layout/register.js?");

/***/ })

}]);