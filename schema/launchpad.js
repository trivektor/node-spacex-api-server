
const Launchpad = `
    type LaunchpadLocation {
        name: String
        region: String
        latitude: Float
        longitude: Float
    }
    
    type Launchpad {
        id: ID!
        status: String
        location: LaunchpadLocation
    }
`;

module.exports = Launchpad;