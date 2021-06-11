#!/usr/bin/env node

const fs = require('fs')
const {db, User} = require('../server/db')
const users = JSON.parse(fs.readFileSync('user.json', 'utf8'))

const seed = async () => {
  await db.sync({force: true})

  await Promise.all(users.map(user => User.create({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
    password: user.password,
    team: user.team
      })))

  db.close()
  console.log(`

    Seeding successful!
    take a seat is ready!

  `)
}

seed().catch(err => {
  db.close()
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `)
})
