const Sequelize = require('sequelize');
const db = require('./database')

const Reservation = db.define('reservation', {
    reserved: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    date: {
        type: Sequelize.DATEONLY,
        defaultValue: null
    }
})

module.exports = Reservation
