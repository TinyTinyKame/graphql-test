const { v4: uuidv4 } = require('uuid');
const singers = require('../../singers/datas/singers');

const getSingers = () => {
  return singers;
};

const getSinger = ({ id }) => {
  return singers.find(singer => singer.id === id);
};

const createSinger = ({ singer }) => {
  const newSinger = {
    id: uuidv4(),
    ...singer
  };

  singers.push(newSinger);

  return newSinger;
};

module.exports = {
  singers: getSingers,
  singer: getSinger,
  createSinger
};
