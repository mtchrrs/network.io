import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`

export const ADD_USER = gql`
  mutation addUser($displayName: String!, $email: String!, $password: String!, $description: String!, $portfolioLink: String!, $opportunitiesLink: String!, $linkedin: String!, $instagram: String!, $facebook: String!, $twitter: String!) {
    addUser($displayName: String!, $email: String!, $password: String!, $description: String!, $portfolioLink: String!, $opportunitiesLink: String!, $linkedin: String!, $instagram: String!, $facebook: String!, $twitter: String!) {
      token
      user {
        _id
        displayName
        email
        description
        portfolioLink
        opportunitiesLink
        linkedin
        instagram
        facebook
        twitter
      }
    }
  }
`

export const ADD_OPP = gql`
  mutation addOpportunities($oppOneTitle: String!, $oppOneDescr: String!, $oppTwoTitle: String!, $oppTwoDescr: String!, $oppThreeTitle: String!, $oppThreeDescr: String!) {
    addOpportunities($oppOneTitle: String!, $oppOneDescr: String!, $oppTwoTitle: String!, $oppTwoDescr: String!, $oppThreeTitle: String!, $oppThreeDescr: String!) {
      _id
      oppOneTitle
      oppOneDescr
      oppTwoTitle
      oppTwoDescr
      oppThreeTitle
      oppThreeDescr
    }
  }
`
