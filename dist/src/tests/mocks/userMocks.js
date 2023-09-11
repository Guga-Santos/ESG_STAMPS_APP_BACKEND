"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMockWithId = exports.userMock = exports.updatedUserMock = exports.updateUserMock = void 0;
const userMock = {
    name: "New User",
    email: "user@email.com",
    password: "password",
    role: "user"
};
exports.userMock = userMock;
const userMockWithId = {
    _id: "64258edafe707e38fcdb2785",
    name: "New User",
    email: "user@email.com",
    password: "password",
    role: "user"
};
exports.userMockWithId = userMockWithId;
const updateUserMock = {
    name: 'Updated User',
    role: 'admin'
};
exports.updateUserMock = updateUserMock;
const updatedUserMock = {
    _id: "64258edafe707e38fcdb2785",
    name: 'Updated User',
    email: "user@email.com",
    password: "password",
    role: 'admin'
};
exports.updatedUserMock = updatedUserMock;
