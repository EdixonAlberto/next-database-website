(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./app/components/code.js":
/*!********************************!*\
  !*** ./app/components/code.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_highlight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-highlight.js */ \"./node_modules/react-highlight.js/dist/main.js\");\n/* harmony import */ var react_highlight_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_highlight_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"next-database-code \".concat(props.noMargin ? 'no-margin' : '')\n  }, props.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"code-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, props.title), props.lang && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header-language\"\n  }, props.lang)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_highlight_js__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    language: \"language-\".concat(props.lang)\n  }, props.text));\n});\n\n//# sourceURL=webpack:///./app/components/code.js?");

/***/ }),

/***/ "./app/components/docsLinks.js":
/*!*************************************!*\
  !*** ./app/components/docsLinks.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var back = _ref.back,\n      forward = _ref.forward;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"docs-links\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/docs/\".concat(back.link)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"/assets/images/icons/back-arrow.svg\",\n    alt: back.title,\n    className: \"left\"\n  }), back.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/docs/\".concat(forward.link)\n  }, forward.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"/assets/images/icons/forward-arrow.svg\",\n    alt: forward.title,\n    className: \"right\"\n  })));\n});\n\n//# sourceURL=webpack:///./app/components/docsLinks.js?");

/***/ }),

/***/ "./app/pages/docs/mysqlUsage.js":
/*!**************************************!*\
  !*** ./app/pages/docs/mysqlUsage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/code */ \"./app/components/code.js\");\n/* harmony import */ var _components_docsLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/docsLinks */ \"./app/components/docsLinks.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Using with MySQL\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_code__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"index.js\",\n    lang: \"javascript\",\n    noMargin: true,\n    text: \"const nextDatabase = require('next-database');\\r\\n\\r\\n\" + \"const database = new nextDatabase({\\r\\n\" + \"   type: 'mysql',\\r\\n\" + \"   host: 'localhost',\\r\\n\" + \"   port: 3306,\\r\\n\" + \"   user: 'root',\\r\\n\" + \"   password: ''\\r\\n\" + \"   database: 'next-database',\\r\\n\" + \"   ssl: false\\r\\n\" + \"});\\r\\n\\r\\n\" + \"try {\\r\\n\" + \"   database.connect();\\r\\n\" + \"   console.log('MySQL connected!');\\r\\n\" + \"}\\r\\n\" + \"catch (error) {\\r\\n\" + \"   console.error(error);\\r\\n\" + \"}\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_docsLinks__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    back: {\n      title: 'Getting Started',\n      link: 'getting-started'\n    },\n    forward: {\n      title: 'Using with PostgreSQL',\n      link: 'postgresql-usage'\n    }\n  }));\n});\n\n//# sourceURL=webpack:///./app/pages/docs/mysqlUsage.js?");

/***/ })

}]);