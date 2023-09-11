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
const CategoryController_1 = __importDefault(require("../../../controllers/CategoryController"));
const CategoryModel_1 = __importDefault(require("../../../models/CategoryModel"));
const CategoryService_1 = __importDefault(require("../../../service/CategoryService"));
const chai_1 = require("chai");
const sinon = __importStar(require("sinon"));
const categoryMocks_1 = require("../../mocks/categoryMocks");
describe('Category Controller Suite Tests', () => {
    const category = new CategoryModel_1.default();
    const categoryService = new CategoryService_1.default(category);
    const categoryController = new CategoryController_1.default(categoryService);
    const req = {};
    const res = {};
    before(() => {
        sinon.stub(categoryService, 'create').resolves(categoryMocks_1.categoryMockWithId);
        sinon.stub(categoryService, 'read').resolves([categoryMocks_1.categoryMockWithId]);
        sinon.stub(categoryService, 'readOne').resolves(categoryMocks_1.categoryMockWithId);
        sinon.stub(categoryService, 'update').resolves(categoryMocks_1.updatedCategoryMock);
        sinon.stub(categoryService, 'delete').resolves();
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        res.end = sinon.stub().returns(res);
    });
    after(() => {
        sinon.restore();
    });
    describe('Create a new Category', () => {
        it('On Success', async () => {
            req.body = categoryMocks_1.categoryMock;
            await categoryController.create(req, res);
            (0, chai_1.expect)(res.status.calledWith(201)).to.be.true;
            (0, chai_1.expect)(res.json.calledWith(categoryMocks_1.categoryMockWithId)).to.be.true;
        });
    });
    describe('Real All Categories', () => {
        it('On Success', async () => {
            await categoryController.read(req, res);
            (0, chai_1.expect)(res.status.calledWith(200)).to.be.true;
            (0, chai_1.expect)(res.json.calledWith([categoryMocks_1.categoryMockWithId])).to.be.true;
        });
    });
    describe('ReadOne Category', () => {
        it('On Success', async () => {
            req.params = { id: categoryMocks_1.categoryMockWithId._id };
            await categoryController.readOne(req, res);
            (0, chai_1.expect)(res.status.calledWith(200)).to.be.true;
            (0, chai_1.expect)(res.json.calledWith(categoryMocks_1.categoryMockWithId)).to.be.true;
        });
    });
    describe('Update Category', () => {
        it('On Success', async () => {
            req.params = { id: categoryMocks_1.categoryMockWithId._id };
            req.body = categoryMocks_1.updateCategory;
            await categoryController.update(req, res);
            (0, chai_1.expect)(res.status.calledWith(201)).to.be.true;
            (0, chai_1.expect)(res.json.calledWith(categoryMocks_1.updatedCategoryMock)).to.be.true;
        });
    });
    describe('Delete Category', () => {
        it('On Success', async () => {
            req.params = { id: categoryMocks_1.categoryMockWithId._id };
            await categoryController.delete(req, res);
            (0, chai_1.expect)(res.status.calledWith(204)).to.be.true;
        });
    });
});
