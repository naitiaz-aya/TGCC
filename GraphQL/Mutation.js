import { gql } from "@apollo/client";
export const CREATE_SECTOR = gql`
  mutation createSector($title: String, $description: String) {
    createSector(sector: { title: $title, description: $description }) {
      id
      title
      description
    }
  }
`;

export const DELETE_SECTOR = gql`
  mutation deleteSector($id: String) {
    deleteSector(id: $id)
  }
`;