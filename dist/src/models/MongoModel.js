"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const catalog_1 = require("../errors/catalog");
class MongoModel {
    constructor(model) {
        this._model = model;
    }
    async create(obj) {
        return this._model.create({ ...obj });
    }
    async read() {
        return this._model.find();
    }
    async readOne(_id) {
        if (!(0, mongoose_1.isValidObjectId)(_id))
            throw new Error(catalog_1.ErrorTypes.InvalidMongoId);
        return this._model.findOne({ _id });
    }
    async update(_id, obj) {
        if (!(0, mongoose_1.isValidObjectId)(_id))
            throw new Error(catalog_1.ErrorTypes.InvalidMongoId);
        if (Object.keys(obj).length === 0)
            throw new Error(catalog_1.ErrorTypes.EmptyBody);
        return this._model.findOneAndUpdate({ _id }, obj, { new: true, versionKey: false });
    }
    async delete(_id) {
        if (!(0, mongoose_1.isValidObjectId)(_id))
            throw new Error(catalog_1.ErrorTypes.InvalidMongoId);
        return this._model.findByIdAndDelete({ _id });
    }
}
exports.default = MongoModel;
