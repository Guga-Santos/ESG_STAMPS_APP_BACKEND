"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
const UserService_1 = __importDefault(require("../service/UserService"));
const route = (0, express_1.Router)();
const user = new UserModel_1.default();
const userService = new UserService_1.default(user);
const userController = new UserController_1.default(userService);
route
    .post('/users', (req, res) => userController.create(req, res))
    .get('/users/:id', (req, res) => userController.readOne(req, res))
    .get('/users', (req, res) => userController.read(req, res))
    .put('/users/:id', (req, res) => userController.update(req, res))
    .delete('/users/:id', (req, res) => userController.delete(req, res));
exports.default = route;
