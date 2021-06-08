const Sequelize = require('sequelize');
const db = require('./database')

const Table = db.define('table', {
    team: {
        type: Sequelize.STRING,
        allowNull: false
    },
    shape: {
        type: Sequelize.ENUM('Circle','Rectangle'),
        allowNull: false
    }
})

module.exports = Table