const fetch = require('node-fetch');

const {SPACEX_API_HOST} = require('../constants');

const launchpads = async () => {
    const response = await fetch(`${SPACEX_API_HOST}/launchpads`);
    const json = await response.json();

    return json;
};

module.exports = launchpads;