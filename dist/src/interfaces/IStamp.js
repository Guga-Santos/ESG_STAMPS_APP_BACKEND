"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StampZodSchema = void 0;
const zod_1 = require("zod");
const StampZodSchema = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    url: zod_1.z.string().url(),
    logo: zod_1.z.string().url(),
});
exports.StampZodSchema = StampZodSchema;
