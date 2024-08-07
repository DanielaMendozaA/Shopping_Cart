"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = require("dotenv");
const path_1 = require("path");
(0, dotenv_1.config)({ path: (0, path_1.resolve)(__dirname, "../../.env") });
const dialectDB = process.env.DB_DIALECT;
const hostDB = process.env.DB_HOST;
const userNameDB = process.env.DB_USER;
const passwordDB = process.env.DB_PASSWORD;
const nameDB = process.env.DB_NAME;
console.log(dialectDB, hostDB, userNameDB, passwordDB, nameDB);
if (!dialectDB || !hostDB || !userNameDB || !passwordDB || !nameDB)
    throw new Error("There aren't all enviroment variables");
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: dialectDB,
    host: hostDB,
    username: userNameDB,
    password: passwordDB,
    database: nameDB
});
exports.default = sequelize;
