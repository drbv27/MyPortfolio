"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ExperienceCard.js":
/*!**************************************!*\
  !*** ./components/ExperienceCard.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Experiences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Experiences */ \"./components/Experiences.js\");\n\n\n\nvar _this = undefined;\nvar ExperienceCard = function(param1) {\n    var experiences = param1.experiences;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-md-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card bg-light\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Experience\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\drbv2\\\\Desktop\\\\CodeProyects\\\\myPortfolio\\\\components\\\\ExperienceCard.js\",\n                        lineNumber: 9,\n                        columnNumber: 17\n                    }, _this),\n                    experiences.map(function(param, j) {\n                        var company = param.company, labour = param.labour, time = param.time, Functions = param.Functions;\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Experiences__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            company: company,\n                            labour: labour,\n                            time: time,\n                            Functions: Functions,\n                            key2: j\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\drbv2\\\\Desktop\\\\CodeProyects\\\\myPortfolio\\\\components\\\\ExperienceCard.js\",\n                            lineNumber: 12,\n                            columnNumber: 25\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\drbv2\\\\Desktop\\\\CodeProyects\\\\myPortfolio\\\\components\\\\ExperienceCard.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\drbv2\\\\Desktop\\\\CodeProyects\\\\myPortfolio\\\\components\\\\ExperienceCard.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\drbv2\\\\Desktop\\\\CodeProyects\\\\myPortfolio\\\\components\\\\ExperienceCard.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this));\n};\n_c = ExperienceCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExperienceCard);\nvar _c;\n$RefreshReg$(_c, \"ExperienceCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cGVyaWVuY2VDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUI7QUFDYTs7QUFFdEMsR0FBSyxDQUFDRSxjQUFjLEdBQUcsUUFBUSxTQUFXLENBQUM7UUFBbEJDLFdBQVcsVUFBWEEsV0FBVzs7SUFDbEMsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBVTs4RkFDeEJELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQWU7a0dBQ3JCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBVzs7Z0dBQ3JCQyxDQUFFO2tDQUFDLENBQVU7Ozs7OztvQkFFVkgsV0FBVyxDQUFDSSxHQUFHLENBQUMsUUFBUSxRQUF5QkMsQ0FBQzs0QkFBaENDLE9BQU8sU0FBUEEsT0FBTyxFQUFDQyxNQUFNLFNBQU5BLE1BQU0sRUFBQ0MsSUFBSSxTQUFKQSxJQUFJLEVBQUNDLFNBQVMsU0FBVEEsU0FBUztzQ0FDM0MsTUFBTSwrREFBTFgsb0RBQVU7NEJBQUNRLE9BQU8sRUFBRUEsT0FBTzs0QkFBRUMsTUFBTSxFQUFFQSxNQUFNOzRCQUFFQyxJQUFJLEVBQUVBLElBQUk7NEJBQUVDLFNBQVMsRUFBRUEsU0FBUzs0QkFBRUMsSUFBSSxFQUFFTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8vRyxDQUFDO0tBZktOLGNBQWM7QUFpQnBCLCtEQUFlQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRXhwZXJpZW5jZUNhcmQuanM/YzFiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBFeHBlcmllbmNlIGZyb20gJy4vRXhwZXJpZW5jZXMnXHJcblxyXG5jb25zdCBFeHBlcmllbmNlQ2FyZCA9ICh7ZXhwZXJpZW5jZXN9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1saWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPkV4cGVyaWVuY2U8L2gxPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VzLm1hcCgoe2NvbXBhbnksbGFib3VyLHRpbWUsRnVuY3Rpb25zfSxqKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXhwZXJpZW5jZSBjb21wYW55PXtjb21wYW55fSBsYWJvdXI9e2xhYm91cn0gdGltZT17dGltZX0gRnVuY3Rpb25zPXtGdW5jdGlvbnN9IGtleTI9e2p9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGVyaWVuY2VDYXJkIl0sIm5hbWVzIjpbIlJlYWN0IiwiRXhwZXJpZW5jZSIsIkV4cGVyaWVuY2VDYXJkIiwiZXhwZXJpZW5jZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsImoiLCJjb21wYW55IiwibGFib3VyIiwidGltZSIsIkZ1bmN0aW9ucyIsImtleTIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ExperienceCard.js\n");

/***/ })

});