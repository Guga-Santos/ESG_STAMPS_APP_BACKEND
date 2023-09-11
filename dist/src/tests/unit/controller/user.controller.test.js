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
const UserController_1 = __importDefault(require("../../../controllers/UserController"));
const UserModel_1 = __importDefault(require("../../../models/UserModel"));
const UserService_1 = __importDefault(require("../../../service/UserService"));
const chai_1 = require("chai");
const sinon = __importStar(require("sinon"));
const userMocks_1 = require("../../mocks/userMocks");
describe('User Controller Suite Tests', () => {
    const userModel = new UserModel_1.default();
    const userService = new UserService_1.default(userModel);
    const userController = new UserController_1.default(userService);
    const req = {};
    const res = {};
    before(() => {
        sinon.stub(userService, 'create').resolves(userMocks_1.userMock);
        sinon.stub(userService, 'read').resolves([userMocks_1.userMockWithId]);
        sinon.stub(userService, 'readOne').resolves(userMocks_1.userMockWithId);
        sinon.stub(userService, 'update').resolves(userMocks_1.updatedUserMock);
        sinon.stub(userService, 'delete').resolves();
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        res.end = sinon.stub().returns(res);
    });
    after(() => {
        sinon.restore();
    });
    describe('Create a new User', () => {
        it('On Success', async () => {
            req.body = userMocks_1.userMock;
            await userController.create(req, res);
            (0, chai_1.expect)(res.status.calledWith(201)).to.be.true;
            (0, chai_1.expect)(res.json.calledWith(userMocks_1.userMock)).to.be.true;
        });
    });
    describe('Read all Users', () => {
        it('On Success', async () => {
            await userController.read(req, res);
            (0, chai_1.expect)(res.status.calledWith(200)).to.be.true;
            (0, chai_1.expect)(res.json.calledWith([userMocks_1.userMockWithId])).to.be.true;
        });
    });
    describe('ReadOne User', () => {
        it('On success', async () => {
            req.params = { id: userMocks_1.userMockWithId._id };
            await userController.readOne(req, res);
            (0, chai_1.expect)(res.status.calledWith(200)).to.be.true;
            (0, chai_1.expect)(res.json.calledWith(userMocks_1.userMockWithId)).to.be.true;
        });
    });
    describe('Update User', () => {
        it('On Success', async () => {
            req.params = { id: userMocks_1.userMockWithId._id };
            req.body = userMocks_1.updateUserMock;
            await userController.update(req, res);
            (0, chai_1.expect)(res.status.calledWith(201)).to.be.true;
            (0, chai_1.expect)(res.json.calledWith(userMocks_1.updatedUserMock)).to.be.true;
        });
    });
    describe('Delete User', () => {
        it('On Success', async () => {
            req.params = { id: userMocks_1.userMockWithId._id };
            await userController.delete(req, res);
            (0, chai_1.expect)(res.status.calledWith(204)).to.be.true;
        });
    });
});
