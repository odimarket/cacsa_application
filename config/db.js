const Sequelize = require('sequelize');
module.exports = new Sequelize('heroku_de420a8a633d30d', 'be2ec550f02752', '777b163c', {
    host: 'us-cdbr-east-03.cleardb.com',
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  
});