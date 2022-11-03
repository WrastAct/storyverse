require('dotenv').config();

const config =  { 
    postgres: {
      options: {
        host: '0.0.0.0',
        port: 5432,
        database: 'storyverse',
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        dialect: 'postgres'
      }
    }
};
  
const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.postgres.options);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorials = require("./dialogueModel.js")(sequelize, Sequelize);

module.exports = db;