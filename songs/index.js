const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const songs = require('./datas/songs');
const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/songs', (req, res) => {
  return res.status(200).json(songs);
});

app.post('/songs', (req, res) => {
  const { name, singerId } = req.body;

  if (!name?.trim() || !singerId?.trim()) {
    return res.status(400).json('Bad request');
  }

  const newSong = {
    id: uuidv4(),
    name,
    singerId
  }

  songs.push(newSong);

  return res.status(201).json(newSong);
});

app.put('/songs/:id', (req, res) => {
  const { id } = req.params;
  const { name, singerId } = req.body;
  const songIndex = songs.findIndex(song => song.id === id);

  if (songIndex < 0) {
    return res.status(404).json('Not found');
  }

  if (name?.trim()) {
    songs[songIndex].name = name;
  }

  if (singerId?.trim()) {
    songs[songIndex].singerId = singerId;
  }

  return res.status(201).json(songs[songIndex]);
});

app.delete('/songs/:id', (req, res) => {
  const { id } = req.params;
  const songIndex = songs.findIndex(song => song.id === id);

  if (songIndex < 0) {
    return res.status(404).json('Not found');
  }

  songs.splice(songIndex, 1);

  return res.status(200).json('Resource deleted successfully');
});

app.listen(port, () => {
  console.log('Songs API on');
});
