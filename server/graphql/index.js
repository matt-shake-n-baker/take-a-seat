const { User } = require("../db/index");
const { gql } = require("@apollo/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { APP_SECRET } = require("../utils");


const typeDefs = gql`
  type Query {
    users: [User]
    user(id: ID): User
    table: Table
    reservation: Reservation
    workspace: Workspace
  }
  
  type AuthPayload {
    token: String
    user: User
  }

  type User {
    id: ID
    firstName: String!
    lastName: String!
    email: String!
    role: String
    imageUrl: String
    team: String!
    token: String
  }

  type Mutation {
    createUser(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      team: String!
    ): User!
    login(email: String!, password: String!): User
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
      const password = await bcrypt.hash(args.password, 10);
      const user = await User.create({ ...args, password });
      const token = jwt.sign({ userId: user.id }, APP_SECRET);
      
      return { user, token };
    },
    async login(_, args) {
      const user = await User.findAll({
        where: {
          email: args.email,
        },
      });
      if (!user) throw new Error("No error exists!");
      const validUser = await bcrypt.compare(args.password, user[0].password);
      if (!validUser) throw new Error("Invalid Password");
      const token = jwt.sign(
        { id: user.id },
        APP_SECRET,
        { expiresIn: '1d' }
      )
      return { token}
    },
  },
};

module.exports = {
  rootResolver,
  typeDefs,
};
