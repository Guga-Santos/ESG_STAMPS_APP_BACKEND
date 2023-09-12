"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedCompanyMock = exports.updateCompanyMock = exports.companyMockWithId = exports.companyMock = void 0;
const companyMock = {
    name: "Example",
    description: "Example of a description",
    url: "http://www.example.com.br",
    email: "example@email.com",
    sector: "Example",
    stamps: ["000000000000000000000000", "999999999999999999999999"],
    logo: "http://www.example.com.br/logo.png",
};
exports.companyMock = companyMock;
const companyMockWithId = {
    _id: "64258edafe707e38fcdb2785",
    name: "Example",
    description: "Example of a description",
    url: "http://www.example.com.br",
    email: "example@email.com",
    sector: "Example",
    stamps: ["000000000000000000000000", "999999999999999999999999"],
    logo: "http://www.example.com.br/logo.png",
};
exports.companyMockWithId = companyMockWithId;
const updateCompanyMock = {
    name: "Updated Example",
    description: "Updated description"
};
exports.updateCompanyMock = updateCompanyMock;
const updatedCompanyMock = {
    _id: "64258edafe707e38fcdb2785",
    name: "Updated Example",
    description: "Updated description",
    url: "http://www.example.com.br",
    email: "example@email.com",
    sector: "Example",
    stamps: ["000000000000000000000000", "999999999999999999999999"],
    logo: "http://www.example.com.br/logo.png",
};
exports.updatedCompanyMock = updatedCompanyMock;
