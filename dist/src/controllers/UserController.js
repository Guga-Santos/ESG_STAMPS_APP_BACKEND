"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor(_service) {
        this._service = _service;
    }
    ;
    async create(req, res) {
        const { body } = req;
        const newUser = await this._service.create(body);
        return res.status(201).json(newUser);
    }
    async read(req, res) {
        const list = await this._service.read();
        return res.status(200).json(list);
    }
    async readOne(req, res) {
        const { id } = req.params;
        const user = await this._service.readOne(id);
        res.status(200).json(user);
    }
    async update(req, res) {
        const { id } = req.params;
        const { body } = req;
        const updated = await this._service.update(id, body);
        return res.status(201).json(updated);
    }
    async delete(req, res) {
        const { id } = req.params;
        await this._service.delete(id);
        return res.status(204).end();
    }
}
exports.default = UserController;
