
const db = require('../config/db');
const Sequelize = require('sequelize');

const Promise = require('bluebird');
const bcrypt = require('bcryptjs');

const Users = require('./Users');

const Generations = db.define('generations', {
    name: {
        type: Sequelize.STRING
    },
    from: {
        type: Sequelize.STRING
    },
    to: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
    image: {
        type: Sequelize.STRING
    },
    head_id: {
        type: Sequelize.INTEGER
    },
    status: {
        type: Sequelize.INTEGER
    },
    deletedAt: {
        type: Sequelize.STRING
    }
});

Users.hasMany(Generations, {foreignKey: 'head_id'});
Generations.belongsTo(Users, {foreignKey: 'head_id'});

module.exports = Generations;
