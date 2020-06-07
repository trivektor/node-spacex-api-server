const {gql} = require('apollo-server');

const Launch = require('./launch');
const Launchpad = require('./launchpad');
const Rocket = require('./rocket');

const Query = `
  type Query {
    launches(orderBy: String, direction: String): [Launch!]
    launch(flightNumber: String!): Launch
    launchpads: [Launchpad!]
    rocket(rocketId: String!): Rocket
  }
`;

const typeDefs = gql`
  ${Launch}
  ${Launchpad}
  ${Rocket}
  ${Query}
`;

module.exports = typeDefs;
