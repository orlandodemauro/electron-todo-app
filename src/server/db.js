"use strict";
const { app } = require('electron');
import LinvoDB from "linvodb3";
import fs from 'fs';

const path = app.getPath("appData") + "/todoApp";
//var path = (process.env.APPDATA || process.env.HOME + (process.platform == 'darwin' ? '/Library/Application Support' : '/.config')) + "/ST26"

if (!fs.existsSync(path)){
    fs.mkdirSync(path);
}


LinvoDB.dbPath = process.env.MONGO_STRING || path || process.cwd() + "/todoApp";

module.exports = LinvoDB;