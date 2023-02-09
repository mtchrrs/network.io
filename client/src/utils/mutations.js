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
    addUser(displayName: $displayName, email: $email, description: description, portfolioLink: $portfolioLink, opportunitiesLink: $opportunitiesLink, linkedin: $linkedin, instagram: $instagram, facebook: $facebook, twitter: $twitter) {
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
    addOpportunities(oppOneTitle: $oppOneTitle, oppOneDescr: $oppOneDescr, oppTwoTitle: $oppTwoTitle, oppTwoDescr: $oppTwoDescr, oppThreeTitle: $oppThreeTitle, oppThreeDescr: $oppThreeDescr) {
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
export const ADD_PORT = gql`
  mutation addPortfolio(edOneTitle: String!, edOneDescr: String!, edTwoTitle: String!, edTwoDescr: String!, exOneTitle: String!, exOneDescr: String!, skillOne: String!, skillTwo: String!, skillThree: String!) {
    addPortfolio(edOneTitle: $edOneTitle, edOneDescr: $edOneDescr, edTwoTitle: $edTwoTitle, edTwoDescr: $edTwoDescr, exOneTitle: $exOneTitle, exOneDescr: $exOneDescr, skillOne: $skillOne, skillTwo: $skillTwo, skillThree: $skillThree) {
      _id
      edOneTitle
      edOneDescr
      edTwoTitle
      edTwoDescr
      exOneTitle
      exOneDescr
      skillOne
      skillTwo
      skillThree
    }
  }
`