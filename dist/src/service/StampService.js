"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catalog_1 = require("../errors/catalog");
const IStamp_1 = require("../interfaces/IStamp");
class StampService {
    constructor(model) {
        this._stamp = model;
    }
    async create(obj) {
        const parsed = IStamp_1.StampZodSchema.safeParse(obj);
        if (!parsed.success) {
            throw new Error(catalog_1.ErrorTypes.FieldsMissing);
        }
        return this._stamp.create(parsed.data);
    }
    async read() {
        const list = await this._stamp.read();
        return list;
    }
    async readOne(_id) {
        const stamp = await this._stamp.readOne(_id);
        if (!stamp)
            throw new Error(catalog_1.ErrorTypes.EntityNotFound);
        return stamp;
    }
    async update(_id, obj) {
        const updated = await this._stamp.update(_id, obj);
        if (!updated)
            throw new Error(catalog_1.ErrorTypes.EntityNotFound);
        return updated;
    }
    async delete(_id) {
        const deleted = await this._stamp.delete(_id);
        if (!deleted)
            throw new Error(catalog_1.ErrorTypes.EntityNotFound);
        return deleted;
    }
}
exports.default = StampService;
