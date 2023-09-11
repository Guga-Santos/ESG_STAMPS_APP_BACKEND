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
const catalog_1 = require("../../../errors/catalog");
const CompanyModel_1 = __importDefault(require("../../../models/CompanyModel"));
const CompanyService_1 = __importDefault(require("../../../service/CompanyService"));
const companyMocks_1 = require("../../mocks/companyMocks");
const chai_1 = require("chai");
const sinon = __importStar(require("sinon"));
describe('Company Service Suite Tests', () => {
    const companyModel = new CompanyModel_1.default();
    const companyService = new CompanyService_1.default(companyModel);
    before(() => {
        sinon.stub(companyModel, 'create').resolves(companyMocks_1.companyMockWithId);
        sinon.stub(companyModel, 'read')
            .onCall(0).resolves([companyMocks_1.companyMockWithId])
            .onCall(1).resolves(null);
        sinon.stub(companyModel, 'readOne')
            .onCall(0).resolves(companyMocks_1.companyMockWithId)
            .onCall(1).resolves(null);
        sinon.stub(companyModel, 'update')
            .onCall(0).resolves(companyMocks_1.updatedCompanyMock)
            .onCall(1).resolves(null);
        sinon.stub(companyModel, 'delete')
            .onCall(0).resolves(companyMocks_1.companyMockWithId)
            .onCall(1).resolves(null);
    });
    after(() => {
        sinon.restore();
    });
    describe('Create Company', () => {
        it('On Success', async () => {
            const newCompany = await companyService.create(companyMocks_1.companyMock);
            (0, chai_1.expect)(newCompany).to.be.deep.equal(companyMocks_1.companyMockWithId);
        });
        it('On Failure', async () => {
            let error;
            try {
                await companyService.create({});
            }
            catch (err) {
                error = err;
            }
            (0, chai_1.expect)(error, 'error should be defined').not.to.be.undefined;
            (0, chai_1.expect)(error.message).to.be.deep.equal(catalog_1.ErrorTypes.FieldsMissing);
        });
    });
    describe('Read All Company', () => {
        it('On Success', async () => {
            const list = await companyService.read();
            (0, chai_1.expect)(list).to.be.deep.equal([companyMocks_1.companyMockWithId]);
        });
        it('On Failure', async () => {
            const list = await companyService.read();
            (0, chai_1.expect)(list).to.be.deep.equal(null);
        });
    });
    describe('ReadOne Company', () => {
        it('On Success', async () => {
            const oneCompany = await companyService.readOne(companyMocks_1.companyMockWithId._id);
            (0, chai_1.expect)(oneCompany).to.be.deep.equal(companyMocks_1.companyMockWithId);
        });
        it('On Failure', async () => {
            let error;
            try {
                await companyService.readOne(companyMocks_1.companyMockWithId._id);
            }
            catch (err) {
                error = err;
            }
            (0, chai_1.expect)(error, 'error should be defined').not.to.be.undefined;
            (0, chai_1.expect)(error.message).to.be.deep.equal(catalog_1.ErrorTypes.EntityNotFound);
        });
    });
    describe('Update Company', () => {
        it('On Success', async () => {
            const updated = await companyService.update(companyMocks_1.companyMockWithId._id, companyMocks_1.updateCompanyMock);
            (0, chai_1.expect)(updated).to.be.deep.equal(companyMocks_1.updatedCompanyMock);
        });
        it('On Failure', async () => {
            let error;
            try {
                await companyService.update(companyMocks_1.companyMockWithId._id, companyMocks_1.updateCompanyMock);
            }
            catch (err) {
                error = err;
            }
            (0, chai_1.expect)(error, 'error should be defined').not.to.be.undefined;
            (0, chai_1.expect)(error.message).to.be.deep.equal(catalog_1.ErrorTypes.EntityNotFound);
        });
    });
    describe('Delete Company', () => {
        it('On Success', async () => {
            const deleted = await companyService.delete(companyMocks_1.companyMockWithId._id);
            (0, chai_1.expect)(deleted).to.be.deep.equal(companyMocks_1.companyMockWithId);
        });
        it('On Failure', async () => {
            let error;
            try {
                await companyService.delete(companyMocks_1.companyMockWithId._id);
            }
            catch (err) {
                error = err;
            }
            (0, chai_1.expect)(error, 'error should be defined').not.to.be.undefined;
            (0, chai_1.expect)(error.message).to.be.deep.equal(catalog_1.ErrorTypes.EntityNotFound);
        });
    });
});
