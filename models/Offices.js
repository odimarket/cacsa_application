
const db = require('../config/db');
const Sequelize = require('sequelize');

// const Promise = require('bluebird');
// const bcrypt = require('bcryptjs');


const Offices = db.define('offices', {
    post: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }
});

module.exports = Offices;
