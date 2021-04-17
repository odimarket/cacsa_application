
const db = require('../config/db');
const Sequelize = require('sequelize');

const Promise = require('bluebird');
const bcrypt = require('bcryptjs');


const Programmes = db.define('programmes', {
    name: {
        type: Sequelize.STRING
    },
    unit_id: {
        type: Sequelize.INTEGER
    },
    day: {
        type: Sequelize.STRING
    },
    time: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
    venue: {
        type: Sequelize.STRING
    }
});

// Contents.sync();

module.exports = Programmes;
