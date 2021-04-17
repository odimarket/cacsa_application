
const db = require('../config/db');
const Sequelize = require('sequelize');

const Promise = require('bluebird');
const bcrypt = require('bcryptjs');


const Contents = db.define('contents', {
    title: {
        type: Sequelize.STRING
    },
    banner: {
        type: Sequelize.STRING
    },
    first_content: {
        type: Sequelize.TEXT
    },
    second_content: {
        type: Sequelize.TEXT
    },
    page: {
        type: Sequelize.STRING
    }
});

// Contents.sync();

module.exports = Contents;
