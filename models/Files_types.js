
const db = require('../config/db');
const Sequelize = require('sequelize');

// const Promise = require('bluebird');
// const bcrypt = require('bcryptjs');


const Files_types = db.define('files_types', {
    type: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }
});

module.exports = Files_types;
