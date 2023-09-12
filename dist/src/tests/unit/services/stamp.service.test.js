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
const StampModel_1 = __importDefault(require("../../../models/StampModel"));
const StampService_1 = __importDefault(require("../../../service/StampService"));
const chai_1 = require("chai");
const sinon = __importStar(require("sinon"));
const catalog_1 = require("../../../errors/catalog");
const stampMocks_1 = require("../../mocks/stampMocks");
describe('Stamp Service Suite Tests', () => {
    const stampModel = new StampModel_1.default();
    const stampService = new StampService_1.default(stampModel);
    before(() => {
        sinon.stub(stampModel, 'create').resolves(stampMocks_1.stampMockWithId);
        sinon.stub(stampModel, 'read')
            .onCall(0).resolves([stampMocks_1.stampMockWithId])
            .onCall(1).resolves(null);
        sinon.stub(stampModel, 'readOne')
            .onCall(0).resolves(stampMocks_1.stampMockWithId)
            .onCall(1).resolves(null);
        sinon.stub(stampModel, 'update')
            .onCall(0).resolves(stampMocks_1.updatedStampMock)
            .onCall(1).resolves(null);
        sinon.stub(stampModel, 'delete')
            .onCall(0).resolves(stampMocks_1.stampMockWithId)
            .onCall(1).resolves(null);
    });
    after(() => {
        sinon.restore();
    });
    describe('Create Stamp', () => {
        it('On Success', async () => {
            const newStamp = await stampService.create(stampMocks_1.stampMock);
            (0, chai_1.expect)(newStamp).to.be.deep.equal(stampMocks_1.stampMockWithId);
        });
        it('On Failure', async () => {
            let error;
            try {
                await stampService.create({});
            }
            catch (err) {
                error = err;
            }
            (0, chai_1.expect)(error, 'Error should be defined').not.to.be.undefined;
            (0, chai_1.expect)(error.message).to.be.deep.equal(catalog_1.ErrorTypes.FieldsMissing);
        });
    });
    describe('Read All Stamps', () => {
        it('On Success', async () => {
            const list = await stampService.read();
            (0, chai_1.expect)(list).to.be.deep.equal([stampMocks_1.stampMockWithId]);
        });
        it('On Failure', async () => {
            const list = await stampService.read();
            (0, chai_1.expect)(list).to.be.deep.equal(null);
        });
    });
    describe('ReadOne Stamp', () => {
        it('On Success', async () => {
            const oneStamp = await stampService.readOne(stampMocks_1.stampMockWithId._id);
            (0, chai_1.expect)(oneStamp).to.be.deep.equal(stampMocks_1.stampMockWithId);
        });
        it('On Failure', async () => {
            let error;
            try {
                await stampService.readOne(stampMocks_1.stampMockWithId._id);
            }
            catch (err) {
                error = err;
            }
            (0, chai_1.expect)(error, 'Error should be defined').not.to.be.undefined;
            (0, chai_1.expect)(error.message).to.be.deep.equal(catalog_1.ErrorTypes.EntityNotFound);
        });
    });
    describe('Update Stamp', () => {
        it('On Success', async () => {
            const updated = await stampService.update(stampMocks_1.stampMockWithId._id, stampMocks_1.updateStamp);
            (0, chai_1.expect)(updated).to.be.deep.equal(stampMocks_1.updatedStampMock);
        });
        it('On Failure', async () => {
            let error;
            try {
                await stampService.update(stampMocks_1.stampMockWithId._id, stampMocks_1.updateStamp);
            }
            catch (err) {
                error = err;
            }
            (0, chai_1.expect)(error, 'Error should be defined').not.to.be.undefined;
            (0, chai_1.expect)(error.message).to.be.deep.equal(catalog_1.ErrorTypes.EntityNotFound);
        });
    });
    describe('Delete Stamp', () => {
        it('On Success', async () => {
            const deleted = await stampService.delete(stampMocks_1.stampMockWithId._id);
            (0, chai_1.expect)(deleted).to.be.deep.equal(stampMocks_1.stampMockWithId);
        });
        it('On Failure', async () => {
            let error;
            try {
                await stampService.delete(stampMocks_1.stampMockWithId._id);
            }
            catch (err) {
                error = err;
            }
            (0, chai_1.expect)(error, 'Error should be defined').not.to.be.undefined;
            (0, chai_1.expect)(error.message).to.be.deep.equal(catalog_1.ErrorTypes.EntityNotFound);
        });
    });
});
