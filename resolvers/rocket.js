const fetch = require('node-fetch');

const {SPACEX_API_HOST} = require('../constants');

const rocket = async (_, args) => {
    const {rocketId} = args;
    const response = await fetch(`${SPACEX_API_HOST}/rockets/${rocketId}`);
    const json = await response.json();

    return json;
};

module.exports = rocket;