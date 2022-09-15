'use strict';

//dependecias
const path = require('path')
const basename = path.basename(__filename);
const fs = require('fs'); 
let db = {}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-8) === 'Model.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file));

    let index = file.substring(0, file.length - 8);
    db[index] = model;
  });

module.exports = db;
