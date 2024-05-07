"use strict";
(() => {
var exports = {};
exports.id = 595;
exports.ids = [595];
exports.modules = {

/***/ 9132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: () => (/* binding */ prisma)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./src/lib/prisma.ts

const prisma = new client_namespaceObject.PrismaClient({
    log: [
        "query"
    ]
});


/***/ }),

/***/ 7194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9132);

async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).end();
    }
    const people = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.person.findMany();
    if (!people) {
        return res.status(400).json({
            message: "Doesnt have any player yet"
        });
    }
    return res.json(people);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7194));
module.exports = __webpack_exports__;

})();