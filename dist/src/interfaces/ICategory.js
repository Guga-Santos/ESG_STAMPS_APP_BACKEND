"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryZodSchema = void 0;
const zod_1 = require("zod");
const CategoryZodSchema = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    stamps: zod_1.z.array(zod_1.z.string())
});
exports.CategoryZodSchema = CategoryZodSchema;
