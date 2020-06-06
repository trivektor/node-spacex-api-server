const {gql} = require('apollo-server');

const Launch = require('./launch');

const Query = `
  type Query {
    launches(orderBy: String, direction: String): [Launch!]
    launch(flightNumber: String!): Launch
  }
`;

const typeDefs = gql`
  ${Launch}
  ${Query}
`;

module.exports = typeDefs;
