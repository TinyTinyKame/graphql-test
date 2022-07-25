const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Singer {
    id: ID!,
    name: String!
  }

  input SingerInput {
    name: String!
  }

  type Song {
    id: ID!,
    name: String!,
    singerId: String
  }

  input SongInput {
    name: String!
  }

  type Query {
    singers: [Singer!]
    songs: [Song!]
    singer(id: ID!): Singer
    song(id: ID!): Song
  }

  type Mutation {
    createSinger(singer: SingerInput!): Singer!
    createSong(song: SongInput!): Song!
  }
`);

module.exports = schema;
