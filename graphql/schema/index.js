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
    singer: Singer!
  }

  input SongInput {
    name: String!,
    singerId: ID!
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
