const { v4: uuidv4 } = require('uuid');
const songs = require('../../songs/datas/songs');

const getSongs = () => {
  return songs;
};

const getSong = ({ id }) => {
  return songs.find(song => song.id === id);
};

const createSong = ({ song }) => {
  const newSong = {
    id: uuidv4(),
    ...song
  }

  songs.push(newSong);

  return newSong;
};

module.exports = {
  songs: getSongs,
  song: getSong,
  createSong
};
