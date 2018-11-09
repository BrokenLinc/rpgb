const sample = require('lodash/sample');

const getLastName = () => sample([
  'Anderson',
  'Barnes',
  'Cardiff',
  'Donahue',
  'Eriksen',
  'Frankel',
  'Giles',
  'Hunter',
  'Iver',
  'Jameson',
  'Kerry',
]);

module.exports = getLastName;
