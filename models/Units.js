
const db = require('../config/db');
const Sequelize = require('sequelize');

const Promise = require('bluebird');
const bcrypt = require('bcryptjs');

const Units = db.define('units', {
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
    pathname: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    }
});

// Contents.sync();

module.exports = Units;
