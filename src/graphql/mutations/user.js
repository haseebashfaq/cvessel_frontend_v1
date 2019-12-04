import { gql } from 'apollo-boost'

export const LOGIN = gql`
  mutation Login($data: LoginUserInput!) {
    login(data: $data) {
      token
      user {
        id
        firstName
      }
    }
  }
`

export const CREATE_USER = gql`
  mutation CreateUser($data: CreateUserInput!) {
    createUser(data: $data) {
      token
      user {
        id
        firstName
      }
    }
  }
`
