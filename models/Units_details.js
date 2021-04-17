
const db = require('../config/db');
const Sequelize = require('sequelize');

const Promise = require('bluebird');
const bcrypt = require('bcryptjs');

const Generations = require('./Generations');
const Units = require('./Units');
const Users = require('./Users');
// const Executives = require('./Executives');

const Units_details = db.define('units_details', {
    unit_id: {
        type: Sequelize.INTEGER
    },
    image: {
        type: Sequelize.STRING
    },
    executive_id: {
        type: Sequelize.INTEGER
    },
    sub_exco_id: {
        type: Sequelize.INTEGER
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    gen_id: {
        type: Sequelize.INTEGER
    }
});

Generations.hasMany(Units_details, {foreignKey: 'gen_id'});
Units_details.belongsTo(Generations, {foreignKey: 'gen_id'});

Units.hasMany(Units_details, {foreignKey: 'unit_id'});
Units_details.belongsTo(Units, {foreignKey: 'unit_id'});

Users.hasMany(Units_details, {as: 'exco', foreignKey: 'executive_id'});
Units_details.belongsTo(Users, {as: 'exco', foreignKey: 'executive_id'});

Users.hasMany(Units_details, {as: 'sub_exco', foreignKey: 'sub_exco_id'});
Units_details.belongsTo(Users, {as: 'sub_exco', foreignKey: 'sub_exco_id'});

Users.hasMany(Units_details, {as: 'member', foreignKey: 'user_id'});
Units_details.belongsTo(Users, {as: 'member', foreignKey: 'user_id'});

module.exports = Units_details;
