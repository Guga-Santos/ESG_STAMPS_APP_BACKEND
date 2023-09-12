"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catalog_1 = require("../errors/catalog");
const ICompany_1 = require("../interfaces/ICompany");
class CompanyService {
    constructor(model) {
        this._company = model;
    }
    async create(obj) {
        const parsed = ICompany_1.CompanyZodSchema.safeParse(obj);
        if (!parsed.success) {
            throw new Error(catalog_1.ErrorTypes.FieldsMissing);
        }
        return this._company.create(parsed.data);
    }
    async read() {
        const list = await this._company.read();
        return list;
    }
    async readOne(_id) {
        const company = await this._company.readOne(_id);
        if (!company)
            throw new Error(catalog_1.ErrorTypes.EntityNotFound);
        return company;
    }
    async update(_id, obj) {
        const updated = await this._company.update(_id, obj);
        if (!updated)
            throw new Error(catalog_1.ErrorTypes.EntityNotFound);
        return updated;
    }
    async delete(_id) {
        const deleted = await this._company.delete(_id);
        if (!deleted)
            throw new Error(catalog_1.ErrorTypes.EntityNotFound);
        return deleted;
    }
}
exports.default = CompanyService;
