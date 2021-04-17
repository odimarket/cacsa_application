
const db = require('../config/db');
const Sequelize = require('sequelize');

// const Promise = require('bluebird');
// const bcrypt = require('bcryptjs');

// function hashPassword (user, options){
//     const SALT_FACTOR = 8;

//     let salt = bcrypt.genSaltSync(SALT_FACTOR);
//     let hash = bcrypt.hashSync(user.password, salt);
//     return hash;
//     // return bcrypt
//     //     .genSaltAsync(SALT_FACTOR)
//     //     .then(salt => bcrypt.hashAsync(user.password, salt, null))
//     //     .then(hash => {
//     //         user.setDataValue('password', hash)
//     //     })
// }


const Users = db.define('users', {
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    tel: {
        type: Sequelize.STRING
    },
    campus_home_address: {
        type: Sequelize.TEXT
    },
    home_address: {
        type: Sequelize.TEXT
    },
    state: {
        type: Sequelize.STRING
    },
    country: {
        type: Sequelize.STRING
    },
    dob: {
        type: Sequelize.DATEONLY
    },
    gender: {
        type: Sequelize.STRING
    },
    dept: {
        type: Sequelize.STRING
    },
    level: {
        type: Sequelize.STRING
    },
    programme: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    profile_picture: {
        type: Sequelize.STRING
    },
    units: {
        type: Sequelize.STRING
    },
    role: {
        type: Sequelize.STRING
    },
    email_verified: {
        type: Sequelize.INTEGER
    },
    status: {
        type: Sequelize.INTEGER
    },
    token: {
        type: Sequelize.STRING
    }
});

// Users.sync();

module.exports = Users;
