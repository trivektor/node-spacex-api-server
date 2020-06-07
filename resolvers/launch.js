const fetch = require('node-fetch');
const {pick} = require('lodash');

const {SPACEX_API_HOST} = require('../constants');

const launch = async (_, args) => {
  const {flightNumber} = args;
  const response = await fetch(`${SPACEX_API_HOST}/launches/${flightNumber}`);
  const json = await response.json();

  return {
    ...pick(json, [
      "mission_name",
      "details",
      "flight_number",
      "launch_date_unix",
      "launch_year",
    ]),
    rocket_id: json.rocket.rocket_id,
  };
};

module.exports = launch;
