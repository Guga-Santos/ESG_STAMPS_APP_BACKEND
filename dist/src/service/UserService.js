"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catalog_1 = require("../errors/catalog");
const IUser_1 = require("../interfaces/IUser");
class UserService {
    constructor(model) {
        this._user = model;
    }
    async create(obj) {
        const parsed = IUser_1.UserZodSchema.safeParse(obj);
        if (!parsed.success)
            throw new Error(catalog_1.ErrorTypes.FieldsMissing);
        return this._user.create(parsed.data);
    }
    async read() {
        const list = this._user.read();
        return list;
    }
    async readOne(_id) {
        const user = await this._user.readOne(_id);
        if (!user)
            throw new Error(catalog_1.ErrorTypes.EntityNotFound);
        return user;
    }
    async update(_id, obj) {
        const updated = await this._user.update(_id, obj);
        if (!updated)
            throw new Error(catalog_1.ErrorTypes.EntityNotFound);
        return updated;
    }
    async delete(_id) {
        const deleted = await this._user.delete(_id);
        if (!deleted)
            throw new Error(catalog_1.ErrorTypes.EntityNotFound);
        return deleted;
    }
}
exports.default = UserService;
