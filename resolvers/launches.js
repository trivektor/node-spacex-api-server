const fetch = require('node-fetch');
const {map, pick, orderBy} = require('lodash');

const {SPACEX_API_HOST} = require('../constants');

const launches = async (_, args) => {
  const response = await fetch(`${SPACEX_API_HOST}/launches`);
  const json = await response.json();

  const orderedLaunches = orderBy(
    json,
    [args.orderBy || 'launch_date_unix'],
    [args.direction || 'asc']
  );

  return map(orderedLaunches, (launch) => {
    return {
      ...pick(launch, [
        "mission_name",
        "details",
        "flight_number",
        "launch_date_unix",
        "launch_year",
      ]),
      rocket_id: 1,
    };
  });
};

module.exports = launches;
