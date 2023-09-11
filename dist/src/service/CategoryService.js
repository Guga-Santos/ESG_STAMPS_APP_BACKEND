"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catalog_1 = require("../errors/catalog");
const ICategory_1 = require("../interfaces/ICategory");
class CategoryService {
    constructor(model) {
        this._category = model;
    }
    async create(obj) {
        const parsed = ICategory_1.CategoryZodSchema.safeParse(obj);
        if (!parsed.success) {
            throw new Error(catalog_1.ErrorTypes.FieldsMissing);
        }
        return this._category.create(parsed.data);
    }
    async read() {
        const list = await this._category.read();
        return list;
    }
    async readOne(_id) {
        const company = await this._category.readOne(_id);
        if (!company)
            throw new Error(catalog_1.ErrorTypes.EntityNotFound);
        return company;
    }
    async update(_id, obj) {
        const updated = await this._category.update(_id, obj);
        if (!updated)
            throw new Error(catalog_1.ErrorTypes.EntityNotFound);
        return updated;
    }
    async delete(_id) {
        const deleted = await this._category.delete(_id);
        if (!deleted)
            throw new Error(catalog_1.ErrorTypes.EntityNotFound);
        return deleted;
    }
}
exports.default = CategoryService;
