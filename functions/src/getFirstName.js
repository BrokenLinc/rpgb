const sample = require('lodash/sample');

const getFirstName = () => sample([
  'Abraham',
  'Billy',
  'Chris',
  'Damion',
  'Edgar',
  'Fonzie',
  'Gillian',
  'Helena',
  'Ignacio',
  'Juniper',
  'Kendrick',
]);

module.exports = getFirstName;
