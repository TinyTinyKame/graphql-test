const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const singerInstance = axios.create({
  baseURL: 'http://localhost:3001/singers'
})

const getSingers = async () => {
  try {
    const singers = await singerInstance.get('/');

    return singers.data;
  } catch (err) {
    return null;
  }

};

const getSinger = ({ id }) => {
  return singers.find(singer => singer.id === id);
};

const createSinger = async ({ singer }) => {
  try {
    const newSinger = await singerInstance.post('/', { ...singer });

    return newSinger.data;
  } catch (err) {
    return null;
  }
};

module.exports = {
  singers: getSingers,
  singer: getSinger,
  createSinger
};
