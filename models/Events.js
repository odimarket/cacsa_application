
const db = require('../config/db');
const Sequelize = require('sequelize');

// const Promise = require('bluebird');
// const bcrypt = require('bcryptjs');


const Events = db.define('events', {
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
    venue: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    },
    pathname: {
        type: Sequelize.TEXT
    },
    event_date: {
        type: Sequelize.DATE
    },
    visibility: {
        type: Sequelize.INTEGER
    },
    theme: {
        type: Sequelize.STRING
    }
});

// Contents.sync();

module.exports = Events;
