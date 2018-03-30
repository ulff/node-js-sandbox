const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0',
  });
});

const users = [
  {
    name: 'Bob',
    age: 21,
  },
  {
    name: 'Olaf',
    age: 34,
  },
];

app.get('/users', (req, res) => {
  res.send(users);
});

app.listen(3000);

module.exports.app = app;
