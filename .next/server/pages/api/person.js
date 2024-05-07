"use strict";
(() => {
var exports = {};
exports.id = 313;
exports.ids = [313];
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

/***/ 6396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9132);

async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).end();
    }
    const { name, cpf, temporary_house } = req.body;
    const person = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.person.create({
        data: {
            name,
            cpf,
            temporary_house
        }
    });
    return res.status(201).json(person);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6396));
module.exports = __webpack_exports__;

})();