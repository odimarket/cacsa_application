
const db = require('../config/db');
const Sequelize = require('sequelize');

const Promise = require('bluebird');
const bcrypt = require('bcryptjs');

const Generations = require('./Generations');
const Users = require('./Users');
const Offices = require('./Offices');

const Executives = db.define('executives', {
    generation_id: {
        type: Sequelize.INTEGER
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    office_id: {
        type: Sequelize.INTEGER
    }
});

Generations.hasMany(Executives, {foreignKey: 'generation_id'});
Executives.belongsTo(Generations, {foreignKey: 'generation_id'});

Users.hasMany(Executives, {foreignKey: 'user_id'});
Executives.belongsTo(Users, {foreignKey: 'user_id'});

Offices.hasMany(Executives, {foreignKey: 'office_id'});
Executives.belongsTo(Offices, {foreignKey: 'office_id'});

module.exports = Executives;
