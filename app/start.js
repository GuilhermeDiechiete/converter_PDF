"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = __importDefault(require("../config/main"));
const fs = require('fs/promises');
const fileName = 'arquivo.txt';
const PDFName = 'testando';
(0, main_1.default)(`./client/${fileName}`, PDFName);
