const fetch = require('node-fetch');

const {SPACEX_API_HOST} = require('../constants');

const launch = async (_, args) => {
  const {flightNumber} = args;
  const response = await fetch(`${SPACEX_API_HOST}/launches/${flightNumber}`);
  const json = await response.json();

  return json;
};

module.exports = launch;
