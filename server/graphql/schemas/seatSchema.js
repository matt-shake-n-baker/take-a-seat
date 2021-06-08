const router = require('express').Router();
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const seatSchema = buildSchema(`
  type Query {
    seats: String
  }
`);
 
// // The root provides a resolver function for each API endpoint
const root = {
  seats: () => {
    return 'seat!';
  },
};

// mounting api
router.use('/', graphqlHTTP({
    schema: seatSchema,
    rootValue: root,
    graphiql: true,
}));

module.exports = router

// // GET all seats
// router.get('/', (req, res, next) => {
//     try {
//     } catch (error) {
//     }
// })

// // POST new seat
// router.post('/', (req, res, next) => {
//     try {
        
//     } catch (error) {
        
//     }
// })

// // GET seat by id
// router.get('/:id', (req, res, next) => {
//     try {
        
//     } catch (error) {
        
//     }
// })

// // PUT seat by id
// router.put('/:id', (req, res, next) => {
//     try {
        
//     } catch (error) {
        
//     }
// })

// // DELETE seat by id
// router.delete('/:id', (req, res, next) => {
//     try {
        
//     } catch (error) {
        
//     }
// })

// module.exports = router