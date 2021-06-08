const db = require('./database')
const User = require('./User')
const Table = require('./Table')
const Seat = require('./Seat')
const Reservation = require('./Reservation')

// Associations
Table.hasMany(Seat);
Seat.belongsTo(Table);

User.hasMany(Reservation)
Reservation.belongsTo(User)

Seat.hasMany(Reservation)
Reservation.belongsTo(Seat)

Seat.belongsTo(Table)
Table.hasMany(Seat)

module.exports = {
  db,
  User,
  Table,
  Seat,
  Reservation
}