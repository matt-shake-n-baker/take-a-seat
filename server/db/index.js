const db = require('./database')
const User = require('./User')
const Table = require('./Table')
const Reservation = require('./Reservation')
const Workspace = require('./Workspace')

// Associations

User.hasMany(Reservation)
Reservation.belongsTo(User)

Table.hasMany(Reservation)
Reservation.belongsTo(Table)

Workspace.belongsToMany(User, {through: 'user_workspace'})
User.belongsToMany(Workspace, {through: 'user_workspace'})

Table.belongsTo(Workspace)
Workspace.hasMany(Table)

module.exports = {
  db,
  User,
  Table,
  Reservation,
  Workspace
}