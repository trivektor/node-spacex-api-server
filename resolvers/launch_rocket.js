const rocket = require('./rocket');

const launchRocket = async (launch) => {
    return await rocket(null, {rocketId: launch.rocket_id});
};

module.exports = launchRocket;