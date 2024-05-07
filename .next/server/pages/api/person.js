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
exports.id = "pages/api/person";
exports.ids = ["pages/api/person"];
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

/***/ "(api)/./src/pages/api/person/index.api.ts":
/*!*******************************************!*\
  !*** ./src/pages/api/person/index.api.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./src/lib/prisma.ts\");\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).end();\n    }\n    const { name, cpf, temporary_house } = req.body;\n    const person = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.person.create({\n        data: {\n            name,\n            cpf,\n            temporary_house\n        }\n    });\n    return res.status(201).json(person);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3BlcnNvbi9pbmRleC5hcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkM7QUFHOUIsZUFBZUMsUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUFvQjtJQUVwQixJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixPQUFPRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsR0FBRztJQUM1QjtJQUVBLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxHQUFHLEVBQUVDLGVBQWUsRUFBRSxHQUFHUCxJQUFJUSxJQUFJO0lBRS9DLE1BQU1DLFNBQVMsTUFBTVgsK0NBQU1BLENBQUNXLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDO1FBQ3hDQyxNQUFNO1lBQ0pOO1lBQ0FDO1lBQ0FDO1FBQ0Y7SUFDRjtJQUVBLE9BQU9OLElBQUlFLE1BQU0sQ0FBQyxLQUFLUyxJQUFJLENBQUNIO0FBQzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9jYWxpemEucnMvLi9zcmMvcGFnZXMvYXBpL3BlcnNvbi9pbmRleC5hcGkudHM/YWFiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3ByaXNtYVwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xuICB9XG5cbiAgY29uc3QgeyBuYW1lLCBjcGYsIHRlbXBvcmFyeV9ob3VzZSB9ID0gcmVxLmJvZHk7XG5cbiAgY29uc3QgcGVyc29uID0gYXdhaXQgcHJpc21hLnBlcnNvbi5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIG5hbWUsXG4gICAgICBjcGYsXG4gICAgICB0ZW1wb3JhcnlfaG91c2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHBlcnNvbik7XG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImVuZCIsIm5hbWUiLCJjcGYiLCJ0ZW1wb3JhcnlfaG91c2UiLCJib2R5IiwicGVyc29uIiwiY3JlYXRlIiwiZGF0YSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/person/index.api.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/person/index.api.ts"));
module.exports = __webpack_exports__;

})();