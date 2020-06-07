const launches = require('./launches');
const launch = require('./launch');
const launchRocket = require('./launch_rocket');
const launchpads = require('./launchpads');
const rocket = require('./rocket');

const resolvers = {
  Query: {
    launches,
    launch,
    launchpads,
    rocket,
  },
  Launch: {
    rocket: launchRocket,
  },
};

module.exports = resolvers;
