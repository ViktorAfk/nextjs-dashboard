"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/invoices/page",{

/***/ "(app-pages-browser)/./app/ui/search.tsx":
/*!***************************!*\
  !*** ./app/ui/search.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_MagnifyingGlassIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=MagnifyingGlassIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction Search(param) {\n    let { placeholder } = param;\n    function handleSearch(term) {\n        console.log(term);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex flex-1 flex-shrink-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"search\",\n                className: \"sr-only\",\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"/Users/viktorshaparenko/projects/nextjs-dashboard/app/ui/search.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500\",\n                placeholder: placeholder\n            }, void 0, false, {\n                fileName: \"/Users/viktorshaparenko/projects/nextjs-dashboard/app/ui/search.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MagnifyingGlassIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                className: \"absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900\"\n            }, void 0, false, {\n                fileName: \"/Users/viktorshaparenko/projects/nextjs-dashboard/app/ui/search.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/viktorshaparenko/projects/nextjs-dashboard/app/ui/search.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9zZWFyY2gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFa0U7QUFFbkQsU0FBU0MsT0FBTyxLQUF3QztRQUF4QyxFQUFFQyxXQUFXLEVBQTJCLEdBQXhDO0lBQzdCLFNBQVNDLGFBQWFDLElBQVk7UUFDaENDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDZDtJQUNBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU1DLFNBQVE7Z0JBQVNGLFdBQVU7MEJBQVU7Ozs7OzswQkFHNUMsOERBQUNHO2dCQUNDSCxXQUFVO2dCQUNWTixhQUFhQTs7Ozs7OzBCQUVmLDhEQUFDRiw2R0FBbUJBO2dCQUFDUSxXQUFVOzs7Ozs7Ozs7Ozs7QUFHckM7S0FoQndCUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdWkvc2VhcmNoLnRzeD8xYTE5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgTWFnbmlmeWluZ0dsYXNzSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCh7IHBsYWNlaG9sZGVyIH06IHsgcGxhY2Vob2xkZXI6IHN0cmluZyB9KSB7XG4gIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaCh0ZXJtOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyh0ZXJtKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LTEgZmxleC1zaHJpbmstMFwiPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWFyY2hcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XG4gICAgICAgIFNlYXJjaFxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9XCJwZWVyIGJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcHktWzlweF0gcGwtMTAgdGV4dC1zbSBvdXRsaW5lLTIgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTUwMFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgIC8+XG4gICAgICA8TWFnbmlmeWluZ0dsYXNzSWNvbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTMgdG9wLTEvMiBoLVsxOHB4XSB3LVsxOHB4XSAtdHJhbnNsYXRlLXktMS8yIHRleHQtZ3JheS01MDAgcGVlci1mb2N1czp0ZXh0LWdyYXktOTAwXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJNYWduaWZ5aW5nR2xhc3NJY29uIiwiU2VhcmNoIiwicGxhY2Vob2xkZXIiLCJoYW5kbGVTZWFyY2giLCJ0ZXJtIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/search.tsx\n"));

/***/ })

});