
const db = require('../config/db');
const Sequelize = require('sequelize');

const Promise = require('bluebird');
const bcrypt = require('bcryptjs');


const Contents_details = db.define('contents_details', {
    content_id: {
        type: Sequelize.INTEGER
    },
    info: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    },
    slide: {
        type: Sequelize.INTEGER
    },
    caption_title: {
        type: Sequelize.STRING
    },
    caption_body: {
        type: Sequelize.TEXT
    },
    link: {
        type: Sequelize.STRING
    },
    link_text: {
        type: Sequelize.STRING
    },
    visibility: {
        type: Sequelize.INTEGER
    },
    icon: {
        type: Sequelize.STRING
    },
    icon_title: {
        type: Sequelize.STRING
    },
    icon_link: {
        type: Sequelize.STRING
    }
});

// Contents.sync();

module.exports = Contents_details;
