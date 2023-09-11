"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const StampController_1 = __importDefault(require("../controllers/StampController"));
const StampModel_1 = __importDefault(require("../models/StampModel"));
const StampService_1 = __importDefault(require("../service/StampService"));
const route = (0, express_1.Router)();
const stamp = new StampModel_1.default();
const stampService = new StampService_1.default(stamp);
const stampController = new StampController_1.default(stampService);
route
    .get('/stamps', (req, res) => stampController.read(req, res))
    .get('/stamp/:id', (req, res) => stampController.readOne(req, res))
    .post('/stamp', (req, res) => stampController.create(req, res))
    .put('/stamp/:id', (req, res) => stampController.update(req, res))
    .delete('/stamp/:id', (req, res) => stampController.delete(req, res));
exports.default = route;
