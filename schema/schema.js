const {gql} = require('apollo-server');

const Launch = require('./launch');
const Launchpad = require('./launchpad');

const Query = `
  type Query {
    launches(orderBy: String, direction: String): [Launch!]
    launch(flightNumber: String!): Launch
    launchpads: [Launchpad!]
  }
`;

const typeDefs = gql`
  ${Launch}
  ${Launchpad}
  ${Query}
`;

module.exports = typeDefs;
