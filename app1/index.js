const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const users = require('./datas/users');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/users', (req, res) => {
  return res.status(200).json(users);
});

app.post('/users', (req, res) => {
  const { first_name, last_name } = req.body;

  if (!first_name?.trim() || !last_name?.trim()) {
    return res.status(400).json('Bad request');
  }

  const newUser = {
    id: uuidv4(),
    first_name,
    last_name
  }

  users.push(newUser);

  return res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { first_name, last_name } = req.body;
  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex < 0) {
    return res.status(404).json('Not found');
  }

  if (first_name?.trim()) {
    users[userIndex].first_name = first_name;
  }

  if (last_name?.trim()) {
    users[userIndex].last_name = last_name;
  }

  return res.status(201).json(users[userIndex]);
})

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex < 0) {
    return res.status(404).json('Not found');
  }

  users.splice(userIndex, 1);

  return res.status(200).json('Resource deleted successfully');
});

app.listen(port, () => {
  console.log('Suhsuh app1');
});
