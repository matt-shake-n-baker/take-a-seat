const router = require('express').Router();
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { User } = require('../../db/User')

const userSchema = buildSchema(`
  type Query {
    users: String
  }
`);

// // The root provides a resolver function for each API endpoint
const root = {
  users: async () => {
    const users = await User.create({
      "firstName": "Matt",
      "lastName": "Baker",
      "email": "test@test.com",
      "password": "test",
      "team": "Operations",
      "role": "Admin"
    })
    console.log(users)
    return users;
  },
};

// mounting api
router.use('/', graphqlHTTP({
    schema: userSchema,
    rootValue: root,
    graphiql: true,
}));

module.exports = router


// // GET all users
// router.get('/', (req, res, next) => {
//     try {
//     } catch (error) {
//     }
// })

// // POST new user
// router.post('/', (req, res, next) => {
//     try {
        
//     } catch (error) {
        
//     }
// })

// // GET user by id
// router.get('/:id', (req, res, next) => {
//     try {
        
//     } catch (error) {
        
//     }
// })

// // PUT user by id
// router.put('/:id', (req, res, next) => {
//     try {
        
//     } catch (error) {
        
//     }
// })

// // DELETE user by id
// router.delete('/:id', (req, res, next) => {
//     try {
        
//     } catch (error) {
        
//     }
// })

// module.exports = router