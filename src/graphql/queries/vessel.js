import { gql } from 'apollo-boost'

export const VESSELS = gql`
  query Vessels($query: String!) {
    vessels(query: $query) {
      id
      vesselName
      port
      createdAt
    }
  }
`
