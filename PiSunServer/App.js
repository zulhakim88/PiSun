const express = require('express');
const piCalculator = require('./src/calculator/PiCalculator');
const sunCircCalculator = require('./src/calculator/SunCircCalculator');
require('dotenv/config');
const app = express();

const port = 4000;

let COUNTER = 0;

let PI;

app.get('/api/generate-pi', (req, res) => {
  setInterval(() => {
    PI = piCalculator([COUNTER]);
    COUNTER++;
  }, 5000);
  res.send("PI Calculation started.");
});

app.get('/api/calculate/:precision', (req, res) => {
  const length = req.params.precision;
  const pi = piCalculator([length]);
  const sunCircumference = sunCircCalculator(pi);
  res.json({ pi, sunCircumference});
});

app.get('/api/calculate', (req, res) => {
  const sunCircumference = sunCircCalculator(PI);
  res.json({ PI, sunCircumference});
});

app.get('/api/reset', (req, res) => {
  COUNTER = 0;
  const pi = piCalculator([COUNTER]);
  const sunCircumference = sunCircCalculator(pi);
  res.json({ pi, sunCircumference});
});

app.listen(port, () => console.log(`PiSun app listening on port ${port}!`));

module.exports = app;
