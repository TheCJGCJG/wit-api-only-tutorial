const fs = require('fs');
const fetch = require('node-fetch');
const {validateSamples} = require('../shared');

const DELIMITER = ',';
const data = fs
  .readFileSync('data/data.csv', 'utf-8')
  .split('\r')
  .map(row => row.split(DELIMITER));

const samples = data.map(([text, value]) => {
  return {
    text,
    entities: [
      {
        entity: 'intent',
        value,
      },
    ],
  };
});

validateSamples(samples)
  .then(res => console.log(res));
