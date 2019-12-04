import { gql } from 'apollo-boost'

export const ME = gql`
  query Me {
    me {
      id
      firstName
      lastName
      email
      phone
      address
      userType
      isActivated
      createdAt
    }
  }
`
