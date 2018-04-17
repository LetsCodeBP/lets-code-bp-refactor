'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use('/assets', express.static('assets'));

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', function (req, res) {
  if (req.query.input === undefined) {
    res.body = {
      "error": "Please provide an input!"
    }
  } else {
    res.body = {
      "received": req.query.input,
      "result":  req.query.input * 2
    }
  }
  res.json(res.body);
});

app.get('/greeter', function (req, res) {
  if (req.query.name === undefined) {
    res.body = {
      "error": "Please provide a name!"
    }
  } else if (req.query.title === undefined) {
    res.body = {
      "error": "Please provide a title!"
    }
  } else {
    res.body = {
      "welcome_message": "Oh, hi there " + req.query.name + ", my dear " + req.query.title + "!"
    }
  }
  res.json(res.body);
});

app.get('/appenda/:word', function (req, res) {
  if (req.params.word != null) {
    res.body = {
      "appended": req.params.word + "a"
    }
    res.json(res.body);
  } else {
    res.send(404);
  }
});

app.post('/dountil/:what', function (req, res) {
  let body;
  if (req.params.what != null) {
    if (req.params.what === 'sum') {
      let sum = 0;
      for (let i = 1; i <= req.body.until; i++ ) {
        sum += i;
      }
      body = {
        "result": sum
      }
    } else if (req.params.what === 'factor') {
      let factor = 1;
      for (let i = 1; i <= req.body.until; i++ ) {
        factor *= i;
      }
      body = {
        "result": factor
    }
    }
  } else {
    body = {
        "error": "Please provide a number!"
    }
  }
  res.json(body);
});

app.post('/arrays', function (req, res) {
  let body;
  console.log(req.body);

  if (req.body.what === 'sum') {
    let sum = 0;
      for (let i = 0; i < req.body.numbers.length; i++ ) {
        sum += req.body.numbers[i];
      }
      body = {
        "result": sum
      }
  } else if (req.body.what === 'multiply') {
    let multi = 1;
      for (let i = 0; i < req.body.numbers.length; i++ ) {
        multi *= req.body.numbers[i];
      }
      body = {
        "result": multi
      }
  } else if (req.body.what === 'double') {
    body = {
      "result": req.body.numbers.map(item => item * 2)
    }
  } else {
    body = {
      "error": "Please provide what to do with the numbers!"
    }
  }
  res.json(body);
});

// app.post('/sith', function (req, res) {

// }

app.listen(8080, function() {
  console.log('The server is running');
});
