"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyZodSchema = void 0;
const zod_1 = require("zod");
const CompanyZodSchema = zod_1.z.object({
    name: zod_1.z.string().min(3),
    description: zod_1.z.string(),
    url: zod_1.z.string().url(),
    email: zod_1.z.string().email(),
    sector: zod_1.z.string().min(3),
    stamps: zod_1.z.array(zod_1.z.string()),
    logo: zod_1.z.string().url(),
});
exports.CompanyZodSchema = CompanyZodSchema;
