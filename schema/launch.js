const Launch = `
  type Launch {
    mission_name: String
    details: String
    flight_number: String
    launch_date_unix: Int!
    launch_year: String
    rocket: Rocket
  }
`;

module.exports = Launch;
