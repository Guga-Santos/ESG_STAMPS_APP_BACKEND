"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const connection_1 = __importDefault(require("./models/connection"));
// import Populate from './seeds/populate';
const PORT = process.env.PORT || 3001;
(0, connection_1.default)()
    .then(() => {
    // const populate = new Populate();
    // populate.companySeed();
    app_1.default.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
})
    .catch((error) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
});