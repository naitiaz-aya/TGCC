const { gql } = require("apollo-server-express");

//Queries
const typeDefs = gql`
  type Sector {
    id: ID
    title: String
    description: String
  }
  type Query {
    getAll: [Sector]
  }
  input SectorInput {
    title: String
    description: String
  }
  type Mutation {
    createSector(sector: SectorInput): Sector
    updateSector(id: String, sector: SectorInput): Sector
    deleteSector(id: String): String
  }
`;

module.exports = typeDefs;