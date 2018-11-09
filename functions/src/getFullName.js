const sample = require('lodash/sample');

const getFirstName = require('./getFirstName');
const getLastName = require('./getLastName');

const getFullName = (o) => {
  return o.nickname
    ? `${getFirstName(o)} "${o.nickname}" ${getLastName(o)}`
    : `${getFirstName(o)} ${getLastName(o)}`
};

module.exports = getFullName;
