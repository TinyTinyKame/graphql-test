const songs = require('../../songs/datas/songs');

const getSongs = () => {
  return songs;
};

const getSong = ({ id }) => {
  return songs.find(song => song.id === id);
};

const createSong = ({ song }) => {
  songs.push(song);

  return song;
};

module.exports = {
  songs: getSongs,
  song: getSong,
  createSong
};
