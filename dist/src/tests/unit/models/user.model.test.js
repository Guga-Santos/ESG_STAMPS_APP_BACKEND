"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon = __importStar(require("sinon"));
const UserModel_1 = __importDefault(require("../../../models/UserModel"));
const userMocks_1 = require("../../mocks/userMocks");
describe('User Model Suite Tests', () => {
    const user = new UserModel_1.default();
    before(() => {
        sinon.stub(user._model, 'findOne')
            .onCall(0).resolves(userMocks_1.userMockWithId)
            .onCall(1).resolves(null);
    });
    describe('FindOne', () => {
        it('On success', async () => {
            const findUser = await user.findOne(userMocks_1.userMockWithId.email);
            (0, chai_1.expect)(findUser).to.be.deep.equal(userMocks_1.userMockWithId);
        });
        it('On failure', async () => {
            const findUser = await user.findOne(userMocks_1.userMockWithId.email);
            (0, chai_1.expect)(findUser).to.be.deep.equal(null);
        });
    });
});
