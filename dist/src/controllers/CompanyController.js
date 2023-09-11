"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CompanyController {
    constructor(_service) {
        this._service = _service;
    }
    ;
    async create(req, res) {
        const { body } = req;
        const newCompany = await this._service.create(body);
        return res.status(201).json(newCompany);
    }
    async read(req, res) {
        const list = await this._service.read();
        return res.status(200).json(list);
    }
    async readOne(req, res) {
        const { id } = req.params;
        const company = await this._service.readOne(id);
        return res.status(200).json(company);
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
exports.default = CompanyController;
