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

/***/ "./components/SkillsCard.js":
/*!**********************************!*\
  !*** ./components/SkillsCard.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skill */ \"./components/skill.js\");\n\n\nvar _this = undefined;\nvar SkillsCard = function(param1) {\n    var skills = param1.skills;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-md-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card bg-light\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Skills\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\drbv2\\\\Desktop\\\\CodeProyects\\\\myPortfolio\\\\components\\\\SkillsCard.js\",\n                        lineNumber: 8,\n                        columnNumber: 13\n                    }, _this),\n                    skills.map(function(param, i) {\n                        var skill = param.skill, percentage = param.percentage, icon = param.icon;\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skill__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            skill: skill,\n                            percentage: percentage,\n                            icon: icon\n                        }, i, false, {\n                            fileName: \"C:\\\\Users\\\\drbv2\\\\Desktop\\\\CodeProyects\\\\myPortfolio\\\\components\\\\SkillsCard.js\",\n                            lineNumber: 11,\n                            columnNumber: 21\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\drbv2\\\\Desktop\\\\CodeProyects\\\\myPortfolio\\\\components\\\\SkillsCard.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\drbv2\\\\Desktop\\\\CodeProyects\\\\myPortfolio\\\\components\\\\SkillsCard.js\",\n            lineNumber: 6,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\drbv2\\\\Desktop\\\\CodeProyects\\\\myPortfolio\\\\components\\\\SkillsCard.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, _this));\n};\n_c = SkillsCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SkillsCard);\nvar _c;\n$RefreshReg$(_c, \"SkillsCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NraWxsc0NhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkI7O0FBRTNCLEdBQUssQ0FBQ0MsVUFBVSxHQUFHLFFBQVEsU0FBTSxDQUFDO1FBQWJDLE1BQU0sVUFBTkEsTUFBTTs7SUFDekIsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBVTs4RkFDeEJELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQWU7a0dBQ3pCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBVzs7Z0dBQ3JCQyxDQUFFO2tDQUFDLENBQU07Ozs7OztvQkFFTkgsTUFBTSxDQUFDSSxHQUFHLENBQUMsUUFBUUMsUUFBaUJDLENBQUM7NEJBQXhCQyxLQUFLLFNBQUxBLEtBQUssRUFBQ0YsVUFBVSxTQUFWQSxVQUFVLEVBQUNHLElBQUksU0FBSkEsSUFBSTtzQ0FDOUIsTUFBTSxDQUFDLDhEQUFOViw4Q0FBSzs0QkFBQ1MsS0FBSyxFQUFFQSxLQUFLOzRCQUFFRixVQUFVLEVBQUVBLFVBQVU7NEJBQUVHLElBQUksRUFBRUEsSUFBSTsyQkFBT0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFuRixDQUFDO0tBaEJLUCxVQUFVO0FBa0JoQiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NraWxsc0NhcmQuanM/NjY0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2tpbGwgZnJvbSBcIi4vc2tpbGxcIjtcclxuXHJcbmNvbnN0IFNraWxsc0NhcmQgPSAoe3NraWxsc30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGgxPlNraWxsczwvaDE+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNraWxscy5tYXAoKHtza2lsbCxwZXJjZW50YWdlLGljb259LGkpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPFNraWxsIHNraWxsPXtza2lsbH0gcGVyY2VudGFnZT17cGVyY2VudGFnZX0gaWNvbj17aWNvbn0ga2V5PXtpfS8+XHJcbiAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNraWxsc0NhcmQiXSwibmFtZXMiOlsiU2tpbGwiLCJTa2lsbHNDYXJkIiwic2tpbGxzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJwZXJjZW50YWdlIiwiaSIsInNraWxsIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SkillsCard.js\n");

/***/ })

});