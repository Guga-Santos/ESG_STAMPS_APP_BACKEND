"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CompanyController_1 = __importDefault(require("../controllers/CompanyController"));
const CompanyModel_1 = __importDefault(require("../models/CompanyModel"));
const CompanyService_1 = __importDefault(require("../service/CompanyService"));
const route = (0, express_1.Router)();
const company = new CompanyModel_1.default();
const companyService = new CompanyService_1.default(company);
const companyController = new CompanyController_1.default(companyService);
route
    .get('/companies', (req, res) => companyController.read(req, res))
    .get('/company/:id', (req, res) => companyController.readOne(req, res))
    .post('/company', (req, res) => companyController.create(req, res))
    .put('/company/:id', (req, res) => companyController.update(req, res))
    .delete('/company/:id', (req, res) => companyController.delete(req, res));
exports.default = route;
