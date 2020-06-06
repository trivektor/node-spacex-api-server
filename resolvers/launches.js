const fetch = require('node-fetch');
const {orderBy} = require('lodash');

const {SPACEX_API_HOST} = require('../constants');

const launches = async (_, args) => {
  const response = await fetch(`${SPACEX_API_HOST}/launches`);
  const json = await response.json();

  return orderBy(
    json,
    [args.orderBy || 'launch_date_unix'],
    [args.direction || 'asc']
  );
};

module.exports = launches;
