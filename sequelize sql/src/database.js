const Sequelize = require('sequelize');

// const path = 'mysql://user12:12user@localhost:3306/testdb';
const sequelize = new Sequelize('path','name','pass', { 
    dialect:'mysql',
    host : 'localhost',
    operatorsAliases: false });

// sequelize.authenticate().then(() => {
//   console.log('Connection established successfully.');
// }).catch(err => {
//   console.error('Unable to connect to the database:', err);
// }).finally(() => {
//   sequelize.close();
// });
module.exports =sequelize;