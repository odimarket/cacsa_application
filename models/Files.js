
const db = require('../config/db');
const Sequelize = require('sequelize');

// const Promise = require('bluebird');
// const bcrypt = require('bcryptjs');


const Files = db.define('files', {
    type: {
        type: Sequelize.STRING
    },
    file: {
        type: Sequelize.STRING
    },
    format: {
        type: Sequelize.STRING
    }
});

module.exports = Files;
