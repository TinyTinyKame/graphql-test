const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Singer {
    id: ID!,
    name: String!
  }

  input SingerInput {
    id: ID!,
    name: String!
  }

  type Song {
    id: ID!,
    name: String!,
    singerId: String
  }

  type Query {
    singers: [Singer]
    songs: [Song]
    singer(id: ID!): Singer
  }

  type Mutation {
    createSinger(singer: SingerInput!): Singer
  }
`);

module.exports = schema;
