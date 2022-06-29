const { v4: uuidv4 } = require('uuid');
const singers = require('../../singers/datas/singers');

const songs = [
  {
    id: "433b73fb-c14a-4f15-b614-a3121d04d768",
    name: 'Flowers',
    singerId: singers[2].id
  },
  {
    id: "ee20f42b-ce5d-4f52-9cae-b32855d75045",
    name: 'Trip',
    singerId: singers[0].id
  },
  {
    id: "6382119f-ccb3-40b3-b6f2-46e70b934028",
    name: 'V',
    singerId: singers[3].id
  },
  {
    id: "9b30f829-5778-4937-9671-521d1e32f026",
    name: '春を告げる',
    singerId: singers[1].id
  },
  {
    id: "02e33d5d-14e5-4e56-a7d3-5ab2ff81b610",
    name: 'GANADARA (Feat. IU)',
    singerId: singers[3].id
  },
  {
    id: "6f2d99d6-5d10-49e0-8769-b47dc43ad7b7",
    name: 'Fingers Crossed',
    singerId: singers[2].id
  },
  {
    id: "6992ae01-73c2-463b-b53f-6404c348faf8",
    name: 'Naked',
    singerId: singers[0].id
  }
];

module.exports = [...songs];
