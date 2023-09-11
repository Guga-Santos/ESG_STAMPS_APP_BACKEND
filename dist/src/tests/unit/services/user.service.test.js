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
const UserModel_1 = __importDefault(require("../../../models/UserModel"));
const UserService_1 = __importDefault(require("../../../service/UserService"));
const chai_1 = require("chai");
const sinon = __importStar(require("sinon"));
const catalog_1 = require("../../../errors/catalog");
const userMocks_1 = require("../../mocks/userMocks");
describe('Users Service Suite Tests', () => {
    const userModel = new UserModel_1.default();
    const userService = new UserService_1.default(userModel);
    before(() => {
        sinon.stub(userModel, 'create').resolves(userMocks_1.userMockWithId);
        sinon.stub(userModel, 'read')
            .onCall(0).resolves([userMocks_1.userMockWithId])
            .onCall(1).resolves(null);
        sinon.stub(userModel, 'readOne')
            .onCall(0).resolves(userMocks_1.userMockWithId)
            .onCall(1).resolves(null);
        sinon.stub(userModel, 'update')
            .onCall(0).resolves(userMocks_1.updatedUserMock)
            .onCall(1).resolves(null);
        sinon.stub(userModel, 'delete')
            .onCall(0).resolves(userMocks_1.userMockWithId)
            .onCall(1).resolves(null);
    });
    after(() => {
        sinon.restore();
    });
    describe('Create User', () => {
        it('On Success', async () => {
            const newUser = await userService.create(userMocks_1.userMock);
            (0, chai_1.expect)(newUser).to.be.deep.equal(userMocks_1.userMockWithId);
        });
        it('On Failure', async () => {
            let error;
            try {
                await userService.create({});
            }
            catch (err) {
                error = err;
            }
            (0, chai_1.expect)(error, 'error should be defined').not.to.be.undefined;
            (0, chai_1.expect)(error.message).to.be.deep.equal(catalog_1.ErrorTypes.FieldsMissing);
        });
    });
    describe('Read All Users', () => {
        it('On Success', async () => {
            const list = await userService.read();
            (0, chai_1.expect)(list).to.be.deep.equal([userMocks_1.userMockWithId]);
        });
        it('On failure', async () => {
            const list = await userService.read();
            (0, chai_1.expect)(list).to.be.deep.equal(null);
        });
    });
    describe('ReadOne User', () => {
        it('On Success', async () => {
            const oneUser = await userService.readOne(userMocks_1.userMockWithId._id);
            (0, chai_1.expect)(oneUser).to.be.deep.equal(userMocks_1.userMockWithId);
        });
        it('On failure', async () => {
            let error;
            try {
                await userService.readOne(userMocks_1.userMockWithId._id);
            }
            catch (err) {
                error = err;
            }
            (0, chai_1.expect)(error, 'error should be defined').not.to.be.undefined;
            (0, chai_1.expect)(error.message).to.be.deep.equal(catalog_1.ErrorTypes.EntityNotFound);
        });
    });
    describe('Update User', () => {
        it('On Success', async () => {
            const updatedUser = await userService.update(userMocks_1.userMockWithId._id, userMocks_1.updateUserMock);
            (0, chai_1.expect)(updatedUser).to.be.deep.equal(userMocks_1.updatedUserMock);
        });
        it('On failure', async () => {
            let error;
            try {
                await userService.update(userMocks_1.userMockWithId._id, userMocks_1.updateUserMock);
            }
            catch (err) {
                error = err;
            }
            (0, chai_1.expect)(error, 'error should be defined').not.to.be.undefined;
            (0, chai_1.expect)(error.message).to.be.deep.equal(catalog_1.ErrorTypes.EntityNotFound);
        });
    });
    describe('Delete User', () => {
        it('On success', async () => {
            const user = await userService.delete(userMocks_1.userMockWithId._id);
            (0, chai_1.expect)(user).to.be.deep.equal(userMocks_1.userMockWithId);
        });
        it('On failure', async () => {
            let error;
            try {
                await userService.delete(userMocks_1.userMockWithId._id);
            }
            catch (err) {
                error = err;
            }
            (0, chai_1.expect)(error, 'error should be defined').not.to.be.undefined;
            (0, chai_1.expect)(error.message).to.be.deep.equal(catalog_1.ErrorTypes.EntityNotFound);
        });
    });
});
