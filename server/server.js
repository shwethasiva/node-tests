const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page Not Found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req,res) => {
  res.send([{
    name: 'Min',
    age: 25
  }, {
    name: 'Sukh',
    age: 22
  }, {
    name: 'Janvi',
    age: 21
  }]);
});

app.listen(8001);
module.exports.app = app;
