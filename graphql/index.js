const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const resolvers = require('./resolvers');

const errors = {
  SINGER_NOT_FOUND: 'Singer doesn\'t exist'
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
  customFormatErrorFn: (err) => {
    return {
      ...err,
      message: errors[err.message] || err.message
    }
  }
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
