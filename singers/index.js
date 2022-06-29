const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const singers = require('./datas/singers');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/singers', (req, res) => {
  return res.status(200).json(singers);
});

app.post('/singers', (req, res) => {
  const { name } = req.body;

  if (!name?.trim()) {
    return res.status(400).json('Bad request');
  }

  const newSinger = {
    id: uuidv4(),
    name
  };

  singers.push(newSinger);

  return res.status(201).json(newSinger);
});

app.put('/singers/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const singerIndex = singers.findIndex(singer => singer.id === id);

  if (singerIndex < 0) {
    return res.status(404).json('Not found');
  }

  if (name?.trim()) {
    singers[singerIndex].name = name;
  }

  return res.status(201).json(singers[singerIndex]);
});

app.delete('/singers/:id', (req, res) => {
  const { id } = req.params;
  const singerIndex = singers.findIndex(singer => singer.id === id);

  if (singerIndex < 0) {
    return res.status(404).json('Not found');
  }

  singers.splice(singerIndex, 1);

  return res.status(200).json('Resource deleted successfully');
});

app.listen(port, () => {
  console.log('Singers API on');
});
