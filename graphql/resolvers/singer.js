const singers = require('../../singers/datas/singers');

const getSingers = () => {
  return singers;
};

const getSinger = ({ id }) => {
  return singers.find(singer => singer.id === id);
};

const createSinger = ({ singer }) => {
  singers.push(singer);

  return singer;
};

module.exports = {
  singers: getSingers,
  singer: getSinger,
  createSinger
};
