"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryModel_1 = __importDefault(require("../models/CategoryModel"));
const CompanyModel_1 = __importDefault(require("../models/CompanyModel"));
const StampModel_1 = __importDefault(require("../models/StampModel"));
const companies = require('./companies.json');
class Populate {
    companySeed() {
        const newCompany = new CompanyModel_1.default();
        companies.forEach((company) => {
            newCompany.create(company);
        });
    }
    categorySeed() {
        const newCategory = new CategoryModel_1.default();
    }
    StampSeed() {
        const newStamp = new StampModel_1.default();
    }
}
exports.default = Populate;
