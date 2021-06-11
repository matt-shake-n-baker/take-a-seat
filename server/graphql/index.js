const { User } = require("../db/index");
const { gql } = require("@apollo/client");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const typeDefs = gql`
  type Query {
    users: [User]
    user(id: ID): User
    table: Table
    reservation: Reservation
    workspace: Workspace
  }
  type User {
    id: ID
    firstName: String!
    lastName: String!
    email: String!
    role: String
    imageUrl: String
    team: String!
  }
  type Mutation {
    createUser(
        email: String!
        password: String!
        firstName: String!
        lastName: String!
        team: String!
    ): User!
  }
  type Table {
    id: ID!
    team: String!
    shape: String!
    users: [User]
    reservations: [Reservation]
  }
  type Reservation {
    id: ID!
    reserved: Boolean!
    date: Date!
    user: User
    table: Table
  }
  type Workspace {
    id: ID!
    spaceName: String!
    imageUrl: String
    creator: User!
    users: [User]
    tables: [Table]
  }

  scalar Date
`;

const rootResolver = {
  Query: {
    async users() {
      return await User.findAll();
    },
    async user(_, args) {
      return await User.findByPk(args.id);
    },
  },
  Mutation: {
    async createUser(_, args) {
      const password = await bcrypt.hash(args.password, 10)
      const user = await User.create({...args, password});
      const token = jwt.sign({userId: user.id}, 'TEST')
      return { user, token }
    },
  },
};

module.exports = {
  rootResolver,
  typeDefs,
};
