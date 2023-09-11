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
const CompanyController_1 = __importDefault(require("../../../controllers/CompanyController"));
const CompanyModel_1 = __importDefault(require("../../../models/CompanyModel"));
const CompanyService_1 = __importDefault(require("../../../service/CompanyService"));
const chai_1 = require("chai");
const sinon = __importStar(require("sinon"));
const companyMocks_1 = require("../../mocks/companyMocks");
describe('Company Controller Suite Tests', () => {
    const company = new CompanyModel_1.default();
    const companyService = new CompanyService_1.default(company);
    const companyController = new CompanyController_1.default(companyService);
    const req = {};
    const res = {};
    before(() => {
        sinon.stub(companyService, 'create').resolves(companyMocks_1.companyMockWithId);
        sinon.stub(companyService, 'read').resolves([companyMocks_1.companyMockWithId]);
        sinon.stub(companyService, 'readOne').resolves(companyMocks_1.companyMockWithId);
        sinon.stub(companyService, 'update').resolves(companyMocks_1.updatedCompanyMock);
        sinon.stub(companyService, 'delete').resolves();
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        res.end = sinon.stub().returns(res);
    });
    after(() => {
        sinon.restore();
    });
    describe('Create a new Company', () => {
        it('On Success', async () => {
            req.body = companyMocks_1.companyMock;
            await companyController.create(req, res);
            (0, chai_1.expect)(res.status.calledWith(201)).to.be.true;
            (0, chai_1.expect)(res.json.calledWith(companyMocks_1.companyMockWithId)).to.be.true;
        });
    });
    describe('Read All Companies', () => {
        it('On Success', async () => {
            await companyController.read(req, res);
            (0, chai_1.expect)(res.status.calledWith(200)).to.be.true;
            (0, chai_1.expect)(res.json.calledWith([companyMocks_1.companyMockWithId])).to.be.true;
        });
    });
    describe('ReadOne Company', () => {
        it('On Success', async () => {
            req.params = { id: companyMocks_1.companyMockWithId._id };
            await companyController.readOne(req, res);
            (0, chai_1.expect)(res.status.calledWith(200)).to.be.true;
            (0, chai_1.expect)(res.json.calledWith(companyMocks_1.companyMockWithId)).to.be.true;
        });
    });
    describe('Update Company', () => {
        it('On Success', async () => {
            req.params = { id: companyMocks_1.companyMockWithId._id };
            req.body = companyMocks_1.updateCompanyMock;
            await companyController.update(req, res);
            (0, chai_1.expect)(res.status.calledWith(201)).to.be.true;
            (0, chai_1.expect)(res.json.calledWith(companyMocks_1.updatedCompanyMock)).to.be.true;
        });
    });
    describe('Delete Company', () => {
        it('On Success', async () => {
            req.params = { id: companyMocks_1.companyMockWithId._id };
            await companyController.delete(req, res);
            (0, chai_1.expect)(res.status.calledWith(204)).to.be.true;
        });
    });
});
