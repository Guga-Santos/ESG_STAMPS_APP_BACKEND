"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedCategoryMock = exports.updateCategory = exports.categoryMockWithId = exports.categoryMock = void 0;
const categoryMock = {
    name: "Example",
    description: "Example of a description",
    stamps: ["111111111111111111111111", '999999999999999999999999999']
};
exports.categoryMock = categoryMock;
const categoryMockWithId = {
    _id: "64258edafe707e38fcdb2785",
    name: "Example",
    description: "Example of a description",
    stamps: ["111111111111111111111111", '999999999999999999999999999']
};
exports.categoryMockWithId = categoryMockWithId;
const updateCategory = {
    name: "Updated Example",
    description: "Updated description"
};
exports.updateCategory = updateCategory;
const updatedCategoryMock = {
    _id: "64258edafe707e38fcdb2785",
    name: "Updated Example",
    description: "Updated description",
    stamps: ["000000000000000000000000", "999999999999999999999999"],
};
exports.updatedCategoryMock = updatedCategoryMock;
