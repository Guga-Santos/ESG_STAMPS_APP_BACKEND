"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedStampMock = exports.updateStamp = exports.stampMockWithId = exports.stampMock = void 0;
const stampMock = {
    name: "Example",
    description: "Description Example",
    url: "http://www.stamp.com",
    logo: "http://www.stamp.com/logo.png"
};
exports.stampMock = stampMock;
const stampMockWithId = {
    _id: "64258edafe707e38fcdb2785",
    name: "Example",
    description: "Description Example",
    url: "http://www.stamp.com",
    logo: "http://www.stamp.com/logo.png"
};
exports.stampMockWithId = stampMockWithId;
const updateStamp = {
    name: "Updated Example",
    description: "Updated Example"
};
exports.updateStamp = updateStamp;
const updatedStampMock = {
    _id: "64258edafe707e38fcdb2785",
    name: "Updated Example",
    description: "Updated Example",
    url: "http://www.stamp.com",
    logo: "http://www.stamp.com/logo.png"
};
exports.updatedStampMock = updatedStampMock;
