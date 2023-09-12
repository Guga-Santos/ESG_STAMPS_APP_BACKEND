"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = __importDefault(require("../middlewares/jwt"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
const UserService_1 = __importDefault(require("../service/UserService"));
exports.default = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ error: 'Token não encontrado!' });
    }
    try {
        const jwt = new jwt_1.default();
        const decoded = await jwt.decodeToken(token);
        const userModel = new UserModel_1.default();
        const userService = new UserService_1.default(userModel);
        const user = await userService.readOne(decoded.data.user._id);
        if (!user) {
            return res.status(401).json({ message: 'User Not Found!' });
        }
        if (user.role !== 'admin') {
            return res.status(401).json({ message: 'Access Denied - Unauthorized!' });
        }
        return next();
    }
    catch (error) {
        return res.status(401).json({ message: error });
    }
};
