const { v4: uuidv4 } = require('uuid');
const songs = require('../../songs/datas/songs');
const singers = require('../../singers/datas/singers');
const formattedSongs = songs.map(song => {
  const singer = singers.find(singer => song.singerId === singer.id);

  return {
    ...song,
    singer
  }
});

const getSongs = () => {
  return formattedSongs;
};

const getSong = ({ id }) => {
  return formattedSongs.find(song => song.id === id);
};

const createSong = ({ song }) => {
  const singer = singers.find(singer => singer.id === song.singerId);

  if (!singer) throw new Error('SINGER_NOT_FOUND');

  const newSong = {
    id: uuidv4(),
    ...song,
    singer
  }

  formattedSongs.push(newSong);

  return newSong;
};

module.exports = {
  songs: getSongs,
  song: getSong,
  createSong
};
