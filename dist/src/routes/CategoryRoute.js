"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CategoryController_1 = __importDefault(require("../controllers/CategoryController"));
const CategoryModel_1 = __importDefault(require("../models/CategoryModel"));
const CategoryService_1 = __importDefault(require("../service/CategoryService"));
const route = (0, express_1.Router)();
const category = new CategoryModel_1.default();
const categoryService = new CategoryService_1.default(category);
const categoryController = new CategoryController_1.default(categoryService);
route
    .get('/categories', (req, res) => categoryController.read(req, res))
    .get('/category/:id', (req, res) => categoryController.readOne(req, res))
    .post('/category', (req, res) => categoryController.create(req, res))
    .put('/category/:id', (req, res) => categoryController.update(req, res))
    .delete('/category/:id', (req, res) => categoryController.delete(req, res));
exports.default = route;
