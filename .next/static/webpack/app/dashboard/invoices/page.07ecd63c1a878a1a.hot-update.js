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

/***/ "(app-pages-browser)/./app/ui/invoices/pagination.tsx":
/*!****************************************!*\
  !*** ./app/ui/invoices/pagination.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeftIcon,ArrowRightIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeftIcon,ArrowRightIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction Pagination(param) {\n    let { totalPages } = param;\n    // NOTE: comment in this code when you get to this point in the course\n    // const allPages = generatePagination(currentPage, totalPages);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n}\n_c = Pagination;\nfunction PaginationNumber(param) {\n    let { page, href, isActive, position } = param;\n    const className = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex h-10 w-10 items-center justify-center text-sm border\", {\n        \"rounded-l-md\": position === \"first\" || position === \"single\",\n        \"rounded-r-md\": position === \"last\" || position === \"single\",\n        \"z-10 bg-blue-600 border-blue-600 text-white\": isActive,\n        \"hover:bg-gray-100\": !isActive && position !== \"middle\",\n        \"text-gray-300\": position === \"middle\"\n    });\n    return isActive || position === \"middle\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        children: page\n    }, void 0, false, {\n        fileName: \"/Users/viktorshaparenko/projects/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        className: className,\n        children: page\n    }, void 0, false, {\n        fileName: \"/Users/viktorshaparenko/projects/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_c1 = PaginationNumber;\nfunction PaginationArrow(param) {\n    let { href, direction, isDisabled } = param;\n    const className = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex h-10 w-10 items-center justify-center rounded-md border\", {\n        \"pointer-events-none text-gray-300\": isDisabled,\n        \"hover:bg-gray-100\": !isDisabled,\n        \"mr-2 md:mr-4\": direction === \"left\",\n        \"ml-2 md:ml-4\": direction === \"right\"\n    });\n    const icon = direction === \"left\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"w-4\"\n    }, void 0, false, {\n        fileName: \"/Users/viktorshaparenko/projects/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n        lineNumber: 108,\n        columnNumber: 7\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        className: \"w-4\"\n    }, void 0, false, {\n        fileName: \"/Users/viktorshaparenko/projects/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n        lineNumber: 110,\n        columnNumber: 7\n    }, this);\n    return isDisabled ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        children: icon\n    }, void 0, false, {\n        fileName: \"/Users/viktorshaparenko/projects/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n        lineNumber: 114,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        className: className,\n        href: href,\n        children: icon\n    }, void 0, false, {\n        fileName: \"/Users/viktorshaparenko/projects/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n        lineNumber: 116,\n        columnNumber: 5\n    }, this);\n}\n_c2 = PaginationArrow;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Pagination\");\n$RefreshReg$(_c1, \"PaginationNumber\");\n$RefreshReg$(_c2, \"PaginationArrow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9pbnZvaWNlcy9wYWdpbmF0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUU0RTtBQUNwRDtBQUNLO0FBSWQsU0FBU0ksV0FBVyxLQUFzQztRQUF0QyxFQUFFQyxVQUFVLEVBQTBCLEdBQXRDO0lBQ2pDLHNFQUFzRTtJQUV0RSxnRUFBZ0U7SUFFaEUscUJBQ0U7QUF1Q0o7S0E3Q3dCRDtBQStDeEIsU0FBU0UsaUJBQWlCLEtBVXpCO1FBVnlCLEVBQ3hCQyxJQUFJLEVBQ0pDLElBQUksRUFDSkMsUUFBUSxFQUNSQyxRQUFRLEVBTVQsR0FWeUI7SUFXeEIsTUFBTUMsWUFBWVQsZ0RBQUlBLENBQ3BCLDZEQUNBO1FBQ0UsZ0JBQWdCUSxhQUFhLFdBQVdBLGFBQWE7UUFDckQsZ0JBQWdCQSxhQUFhLFVBQVVBLGFBQWE7UUFDcEQsK0NBQStDRDtRQUMvQyxxQkFBcUIsQ0FBQ0EsWUFBWUMsYUFBYTtRQUMvQyxpQkFBaUJBLGFBQWE7SUFDaEM7SUFHRixPQUFPRCxZQUFZQyxhQUFhLHlCQUM5Qiw4REFBQ0U7UUFBSUQsV0FBV0E7a0JBQVlKOzs7Ozs2QkFFNUIsOERBQUNKLGtEQUFJQTtRQUFDSyxNQUFNQTtRQUFNRyxXQUFXQTtrQkFDMUJKOzs7Ozs7QUFHUDtNQTdCU0Q7QUErQlQsU0FBU08sZ0JBQWdCLEtBUXhCO1FBUndCLEVBQ3ZCTCxJQUFJLEVBQ0pNLFNBQVMsRUFDVEMsVUFBVSxFQUtYLEdBUndCO0lBU3ZCLE1BQU1KLFlBQVlULGdEQUFJQSxDQUNwQixnRUFDQTtRQUNFLHFDQUFxQ2E7UUFDckMscUJBQXFCLENBQUNBO1FBQ3RCLGdCQUFnQkQsY0FBYztRQUM5QixnQkFBZ0JBLGNBQWM7SUFDaEM7SUFHRixNQUFNRSxPQUNKRixjQUFjLHVCQUNaLDhEQUFDZCxzSEFBYUE7UUFBQ1csV0FBVTs7Ozs7NkJBRXpCLDhEQUFDVixzSEFBY0E7UUFBQ1UsV0FBVTs7Ozs7O0lBRzlCLE9BQU9JLDJCQUNMLDhEQUFDSDtRQUFJRCxXQUFXQTtrQkFBWUs7Ozs7OzZCQUU1Qiw4REFBQ2Isa0RBQUlBO1FBQUNRLFdBQVdBO1FBQVdILE1BQU1BO2tCQUMvQlE7Ozs7OztBQUdQO01BakNTSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdWkvaW52b2ljZXMvcGFnaW5hdGlvbi50c3g/ODAzMCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IEFycm93TGVmdEljb24sIEFycm93UmlnaHRJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IGdlbmVyYXRlUGFnaW5hdGlvbiB9IGZyb20gJ0AvYXBwL2xpYi91dGlscyc7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSwgdXNlIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IHRvdGFsUGFnZXMgfTogeyB0b3RhbFBhZ2VzOiBudW1iZXIgfSkge1xuICAvLyBOT1RFOiBjb21tZW50IGluIHRoaXMgY29kZSB3aGVuIHlvdSBnZXQgdG8gdGhpcyBwb2ludCBpbiB0aGUgY291cnNlXG5cbiAgLy8gY29uc3QgYWxsUGFnZXMgPSBnZW5lcmF0ZVBhZ2luYXRpb24oY3VycmVudFBhZ2UsIHRvdGFsUGFnZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBOT1RFOiBjb21tZW50IGluIHRoaXMgY29kZSB3aGVuIHlvdSBnZXQgdG8gdGhpcyBwb2ludCBpbiB0aGUgY291cnNlICovfVxuXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleFwiPlxuICAgICAgICA8UGFnaW5hdGlvbkFycm93XG4gICAgICAgICAgZGlyZWN0aW9uPVwibGVmdFwiXG4gICAgICAgICAgaHJlZj17Y3JlYXRlUGFnZVVSTChjdXJyZW50UGFnZSAtIDEpfVxuICAgICAgICAgIGlzRGlzYWJsZWQ9e2N1cnJlbnRQYWdlIDw9IDF9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IC1zcGFjZS14LXB4XCI+XG4gICAgICAgICAge2FsbFBhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbjogJ2ZpcnN0JyB8ICdsYXN0JyB8ICdzaW5nbGUnIHwgJ21pZGRsZScgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkgcG9zaXRpb24gPSAnZmlyc3QnO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBhbGxQYWdlcy5sZW5ndGggLSAxKSBwb3NpdGlvbiA9ICdsYXN0JztcbiAgICAgICAgICAgIGlmIChhbGxQYWdlcy5sZW5ndGggPT09IDEpIHBvc2l0aW9uID0gJ3NpbmdsZSc7XG4gICAgICAgICAgICBpZiAocGFnZSA9PT0gJy4uLicpIHBvc2l0aW9uID0gJ21pZGRsZSc7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uTnVtYmVyXG4gICAgICAgICAgICAgICAga2V5PXtwYWdlfVxuICAgICAgICAgICAgICAgIGhyZWY9e2NyZWF0ZVBhZ2VVUkwocGFnZSl9XG4gICAgICAgICAgICAgICAgcGFnZT17cGFnZX1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e2N1cnJlbnRQYWdlID09PSBwYWdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFBhZ2luYXRpb25BcnJvd1xuICAgICAgICAgIGRpcmVjdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgICBocmVmPXtjcmVhdGVQYWdlVVJMKGN1cnJlbnRQYWdlICsgMSl9XG4gICAgICAgICAgaXNEaXNhYmxlZD17Y3VycmVudFBhZ2UgPj0gdG90YWxQYWdlc31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8Lz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUGFnaW5hdGlvbk51bWJlcih7XG4gIHBhZ2UsXG4gIGhyZWYsXG4gIGlzQWN0aXZlLFxuICBwb3NpdGlvbixcbn06IHtcbiAgcGFnZTogbnVtYmVyIHwgc3RyaW5nO1xuICBocmVmOiBzdHJpbmc7XG4gIHBvc2l0aW9uPzogJ2ZpcnN0JyB8ICdsYXN0JyB8ICdtaWRkbGUnIHwgJ3NpbmdsZSc7XG4gIGlzQWN0aXZlOiBib29sZWFuO1xufSkge1xuICBjb25zdCBjbGFzc05hbWUgPSBjbHN4KFxuICAgICdmbGV4IGgtMTAgdy0xMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1zbSBib3JkZXInLFxuICAgIHtcbiAgICAgICdyb3VuZGVkLWwtbWQnOiBwb3NpdGlvbiA9PT0gJ2ZpcnN0JyB8fCBwb3NpdGlvbiA9PT0gJ3NpbmdsZScsXG4gICAgICAncm91bmRlZC1yLW1kJzogcG9zaXRpb24gPT09ICdsYXN0JyB8fCBwb3NpdGlvbiA9PT0gJ3NpbmdsZScsXG4gICAgICAnei0xMCBiZy1ibHVlLTYwMCBib3JkZXItYmx1ZS02MDAgdGV4dC13aGl0ZSc6IGlzQWN0aXZlLFxuICAgICAgJ2hvdmVyOmJnLWdyYXktMTAwJzogIWlzQWN0aXZlICYmIHBvc2l0aW9uICE9PSAnbWlkZGxlJyxcbiAgICAgICd0ZXh0LWdyYXktMzAwJzogcG9zaXRpb24gPT09ICdtaWRkbGUnLFxuICAgIH0sXG4gICk7XG5cbiAgcmV0dXJuIGlzQWN0aXZlIHx8IHBvc2l0aW9uID09PSAnbWlkZGxlJyA/IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57cGFnZX08L2Rpdj5cbiAgKSA6IChcbiAgICA8TGluayBocmVmPXtocmVmfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICB7cGFnZX1cbiAgICA8L0xpbms+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFBhZ2luYXRpb25BcnJvdyh7XG4gIGhyZWYsXG4gIGRpcmVjdGlvbixcbiAgaXNEaXNhYmxlZCxcbn06IHtcbiAgaHJlZjogc3RyaW5nO1xuICBkaXJlY3Rpb246ICdsZWZ0JyB8ICdyaWdodCc7XG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuO1xufSkge1xuICBjb25zdCBjbGFzc05hbWUgPSBjbHN4KFxuICAgICdmbGV4IGgtMTAgdy0xMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXInLFxuICAgIHtcbiAgICAgICdwb2ludGVyLWV2ZW50cy1ub25lIHRleHQtZ3JheS0zMDAnOiBpc0Rpc2FibGVkLFxuICAgICAgJ2hvdmVyOmJnLWdyYXktMTAwJzogIWlzRGlzYWJsZWQsXG4gICAgICAnbXItMiBtZDptci00JzogZGlyZWN0aW9uID09PSAnbGVmdCcsXG4gICAgICAnbWwtMiBtZDptbC00JzogZGlyZWN0aW9uID09PSAncmlnaHQnLFxuICAgIH0sXG4gICk7XG5cbiAgY29uc3QgaWNvbiA9XG4gICAgZGlyZWN0aW9uID09PSAnbGVmdCcgPyAoXG4gICAgICA8QXJyb3dMZWZ0SWNvbiBjbGFzc05hbWU9XCJ3LTRcIiAvPlxuICAgICkgOiAoXG4gICAgICA8QXJyb3dSaWdodEljb24gY2xhc3NOYW1lPVwidy00XCIgLz5cbiAgICApO1xuXG4gIHJldHVybiBpc0Rpc2FibGVkID8gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntpY29ufTwvZGl2PlxuICApIDogKFxuICAgIDxMaW5rIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBocmVmPXtocmVmfT5cbiAgICAgIHtpY29ufVxuICAgIDwvTGluaz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJBcnJvd0xlZnRJY29uIiwiQXJyb3dSaWdodEljb24iLCJjbHN4IiwiTGluayIsIlBhZ2luYXRpb24iLCJ0b3RhbFBhZ2VzIiwiUGFnaW5hdGlvbk51bWJlciIsInBhZ2UiLCJocmVmIiwiaXNBY3RpdmUiLCJwb3NpdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsIlBhZ2luYXRpb25BcnJvdyIsImRpcmVjdGlvbiIsImlzRGlzYWJsZWQiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/invoices/pagination.tsx\n"));

/***/ })

});