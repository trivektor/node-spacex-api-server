const launches = require('./launches');
const launch = require('./launch');
const launchpads = require('./launchpads');

const resolvers = {
  Query: {
    launches,
    launch,
    launchpads,
  },
};

module.exports = resolvers;
