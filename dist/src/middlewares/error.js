"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const catalog_1 = require("../errors/catalog");
const errorHandler = (err, _req, res, _next) => {
    if (err instanceof zod_1.ZodError) {
        return res.status(400).json({ message: err.issues });
    }
    const messageAsErrorType = err.message;
    const mappedError = catalog_1.errorCatalog[messageAsErrorType];
    if (mappedError) {
        const { httpStatus, error } = mappedError;
        return res.status(httpStatus).json({ error });
    }
    console.error(err);
    return res.status(500).json({ message: 'internal error' });
};
exports.default = errorHandler;
