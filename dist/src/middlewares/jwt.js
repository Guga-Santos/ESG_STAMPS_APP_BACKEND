"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET = process.env.JWT_SECRET || 'NemTeConto';
class JWT {
    constructor() {
        this._secret = SECRET;
    }
    async createToken(obj) {
        const token = jsonwebtoken_1.default.sign({ data: { user: obj } }, this._secret, {
            expiresIn: '7d',
            algorithm: 'HS256',
        });
        return token;
    }
    async decodeToken(token) {
        const decode = jsonwebtoken_1.default.verify(token, this._secret);
        return decode;
    }
}
exports.default = JWT;
