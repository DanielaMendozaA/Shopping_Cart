"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const database_1 = __importDefault(require("./config/database"));
(0, dotenv_1.config)();
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
app.use(express_1.default.json());
const startApp = async () => {
    try {
        await database_1.default.authenticate();
        console.log("Connection extablished successfully");
        await database_1.default.sync();
        app.listen(PORT, () => {
            console.log("Server is running on port", PORT);
        });
    }
    catch (err) {
        console.error("There was an error trying to connect the databajse", err);
    }
};
startApp();
