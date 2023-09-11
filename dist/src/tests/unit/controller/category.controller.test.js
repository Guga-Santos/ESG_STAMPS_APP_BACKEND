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
const sinon = __importStar(require("sinon"));
describe('Category Controller Suite Tests', () => {
    const category = new CategoryModel_1.default();
    const categoryService = new CategoryService_1.default(category);
    const categoryController = new CategoryController_1.default(categoryService);
    const req = {};
    const res = {};
    before(() => {
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        res.end = sinon.stub().returns(res);
    });
    after(() => {
        sinon.restore();
    });
    describe('Create a new Category', () => {
        it('On Success', async () => { });
    });
    describe('Real All Categories', () => {
        it('On Success', async () => { });
    });
    describe('ReadOne Category', () => {
        it('On Success', async () => { });
    });
    describe('Update Category', () => {
        it('On Success', async () => { });
    });
    describe('Delete Category', () => {
        it('On Success', async () => { });
    });
});
