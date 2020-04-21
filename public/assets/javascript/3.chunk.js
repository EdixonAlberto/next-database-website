(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./app/components/code.js":
/*!********************************!*\
  !*** ./app/components/code.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_highlight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-highlight.js */ \"./node_modules/react-highlight.js/dist/main.js\");\n/* harmony import */ var react_highlight_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_highlight_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"next-database-code \".concat(props.noMargin ? 'no-margin' : '')\n  }, props.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"code-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, props.title), props.lang && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header-language\"\n  }, props.lang)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_highlight_js__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    language: \"language-\".concat(props.lang)\n  }, props.text));\n});\n\n//# sourceURL=webpack:///./app/components/code.js?");

/***/ }),

/***/ "./app/components/docsExtra.js":
/*!*************************************!*\
  !*** ./app/components/docsExtra.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    id: \"limit\"\n  }, \"Limit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Read the\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/docs/limit\"\n  }, \"Limit\"), \" docs for more information.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    id: \"where\"\n  }, \"Where\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Read the\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/docs/where\"\n  }, \"Where\"), \" docs for more information.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    id: \"execute\"\n  }, \"Execute\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Read the\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/docs/queries/execute\"\n  }, \"Queries Overview\"), \" docs for more information.\"));\n});\n\n//# sourceURL=webpack:///./app/components/docsExtra.js?");

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

/***/ "./app/pages/docs/delete.js":
/*!**********************************!*\
  !*** ./app/pages/docs/delete.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/code */ \"./app/components/code.js\");\n/* harmony import */ var _components_docsExtra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/docsExtra */ \"./app/components/docsExtra.js\");\n/* harmony import */ var _components_docsLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/docsLinks */ \"./app/components/docsLinks.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Delete\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"With this method you can delete all data or specific data of a table in your database.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_code__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    lang: \"javascript\",\n    text: \"database.delete(table: string) : nextDatabase.Delete\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Example\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_code__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    lang: \"javascript\",\n    text: \"database.delete('users');\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"It is equivalent to\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_code__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    lang: \"sql\",\n    text: \"DELETE FROM 'users';\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_docsExtra__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_docsLinks__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    back: {\n      title: \"Insert Query\",\n      link: \"insert\"\n    },\n    forward: {\n      title: \"Select Query\",\n      link: \"select\"\n    }\n  }));\n});\n\n//# sourceURL=webpack:///./app/pages/docs/delete.js?");

/***/ })

}]);