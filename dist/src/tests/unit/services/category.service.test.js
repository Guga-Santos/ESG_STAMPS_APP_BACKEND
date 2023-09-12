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
const CategoryModel_1 = __importDefault(require("../../../models/CategoryModel"));
const CategoryService_1 = __importDefault(require("../../../service/CategoryService"));
const chai_1 = require("chai");
const sinon = __importStar(require("sinon"));
const catalog_1 = require("../../../errors/catalog");
const categoryMocks_1 = require("../../mocks/categoryMocks");
describe('Category Service Suite Tests', () => {
    const categoryModel = new CategoryModel_1.default();
    const categoryService = new CategoryService_1.default(categoryModel);
    before(() => {
        sinon.stub(categoryModel, 'create').resolves(categoryMocks_1.categoryMockWithId);
        sinon.stub(categoryModel, 'read')
            .onCall(0).resolves([categoryMocks_1.categoryMockWithId])
            .onCall(1).resolves(null);
        sinon.stub(categoryModel, 'readOne')
            .onCall(0).resolves(categoryMocks_1.categoryMockWithId)
            .onCall(1).resolves(null);
        sinon.stub(categoryModel, 'update')
            .onCall(0).resolves(categoryMocks_1.updatedCategoryMock)
            .onCall(1).resolves(null);
        sinon.stub(categoryModel, 'delete')
            .onCall(0).resolves(categoryMocks_1.categoryMockWithId)
            .onCall(1).resolves(null);
    });
    after(() => {
        sinon.restore();
    });
    describe('Create Category', () => {
        it('On Success', async () => {
            const newCategory = await categoryService.create(categoryMocks_1.categoryMock);
            (0, chai_1.expect)(newCategory).to.be.deep.equal(categoryMocks_1.categoryMockWithId);
        });
        it('On Failure', async () => {
            let error;
            try {
                await categoryService.create({});
            }
            catch (err) {
                error = err;
            }
            (0, chai_1.expect)(error, 'error should be defined').not.to.be.undefined;
            (0, chai_1.expect)(error.message).to.be.deep.equal(catalog_1.ErrorTypes.FieldsMissing);
        });
    });
    describe('Read All Category', () => {
        it('On Success', async () => {
            const list = await categoryService.read();
            (0, chai_1.expect)(list).to.be.deep.equal([categoryMocks_1.categoryMockWithId]);
        });
        it('On Failure', async () => {
            const list = await categoryService.read();
            (0, chai_1.expect)(list).to.be.deep.equal(null);
        });
    });
    describe('ReadOne Category', () => {
        it('On Success', async () => {
            const oneCategory = await categoryService.readOne(categoryMocks_1.categoryMockWithId._id);
            (0, chai_1.expect)(oneCategory).to.be.deep.equal(categoryMocks_1.categoryMockWithId);
        });
        it('On Failure', async () => {
            let error;
            try {
                await categoryService.readOne(categoryMocks_1.categoryMockWithId._id);
            }
            catch (err) {
                error = err;
            }
            (0, chai_1.expect)(error, 'error should be defined').not.to.be.undefined;
            (0, chai_1.expect)(error.message).to.be.deep.equal(catalog_1.ErrorTypes.EntityNotFound);
        });
    });
    describe('Update Category', () => {
        it('On Success', async () => {
            const updated = await categoryService.update(categoryMocks_1.categoryMockWithId._id, categoryMocks_1.updateCategory);
            (0, chai_1.expect)(updated).to.be.deep.equal(categoryMocks_1.updatedCategoryMock);
        });
        it('On Failure', async () => {
            let error;
            try {
                await categoryService.update(categoryMocks_1.categoryMockWithId._id, categoryMocks_1.updateCategory);
            }
            catch (err) {
                error = err;
            }
            (0, chai_1.expect)(error, 'error should be defined').not.to.be.undefined;
            (0, chai_1.expect)(error.message).to.be.deep.equal(catalog_1.ErrorTypes.EntityNotFound);
        });
    });
    describe('Delete Category', () => {
        it('On Success', async () => {
            const deleted = await categoryService.delete(categoryMocks_1.categoryMockWithId._id);
            (0, chai_1.expect)(deleted).to.be.deep.equal(categoryMocks_1.categoryMockWithId);
        });
        it('On Failure', async () => {
            let error;
            try {
                await categoryService.delete(categoryMocks_1.categoryMockWithId._id);
            }
            catch (err) {
                error = err;
            }
            (0, chai_1.expect)(error, 'error should be defined').not.to.be.undefined;
            (0, chai_1.expect)(error.message).to.be.deep.equal(catalog_1.ErrorTypes.EntityNotFound);
        });
    });
});
