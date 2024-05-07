"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/person/people";
exports.ids = ["pages/api/person/people"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFFdEMsTUFBTUMsU0FBUyxJQUFJRCx3REFBWUEsQ0FBQztJQUNyQ0UsS0FBSztRQUFDO0tBQVE7QUFDaEIsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2xvY2FsaXphLnJzLy4vc3JjL2xpYi9wcmlzbWEudHM/MDFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoe1xuICBsb2c6IFsncXVlcnknXSxcbn0pXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/person/people.api.ts":
/*!********************************************!*\
  !*** ./src/pages/api/person/people.api.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./src/lib/prisma.ts\");\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).end();\n    }\n    const people = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.person.findMany();\n    if (!people) {\n        return res.status(400).json({\n            message: \"Doesnt have any player yet\"\n        });\n    }\n    return res.json(people);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3BlcnNvbi9wZW9wbGUuYXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQzZDO0FBRTlCLGVBQWVDLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBb0I7SUFFcEIsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDeEIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLEdBQUc7SUFDNUI7SUFFQSxNQUFNQyxTQUFTLE1BQU1QLCtDQUFNQSxDQUFDUSxNQUFNLENBQUNDLFFBQVE7SUFFM0MsSUFBSSxDQUFDRixRQUFRO1FBQ1gsT0FBT0osSUFBSUUsTUFBTSxDQUFDLEtBQUtLLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQTZCO0lBQ3RFO0lBRUEsT0FBT1IsSUFBSU8sSUFBSSxDQUFDSDtBQUNsQiIsInNvdXJjZXMiOlsid2VicGFjazovL2xvY2FsaXphLnJzLy4vc3JjL3BhZ2VzL2FwaS9wZXJzb24vcGVvcGxlLmFwaS50cz8zMDdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9wcmlzbWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJHRVRcIikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XG4gIH1cblxuICBjb25zdCBwZW9wbGUgPSBhd2FpdCBwcmlzbWEucGVyc29uLmZpbmRNYW55KCk7XG5cbiAgaWYgKCFwZW9wbGUpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBcIkRvZXNudCBoYXZlIGFueSBwbGF5ZXIgeWV0XCIgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzLmpzb24ocGVvcGxlKTtcbn1cbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwiZW5kIiwicGVvcGxlIiwicGVyc29uIiwiZmluZE1hbnkiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/person/people.api.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/person/people.api.ts"));
module.exports = __webpack_exports__;

})();