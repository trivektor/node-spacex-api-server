const launches = require('./launches');
const launch = require('./launch');

const resolvers = {
  Query: {
    launches,
    launch,
  },
};

module.exports = resolvers;
