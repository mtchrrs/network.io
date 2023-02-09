const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    displayName: String!
    email: String!
    password: String!
    profileImg: Image!
    description: String!
    portfolioLink: String!
    opportunitiesLink: String!
    linkedin: String!
    instagram: String!
    facebook: String!
    twitter: String!
    opportunities: [Opportunities]
    portfolio: [Portfolio]
  }

  type Portfolio {
    _id: ID!
    edOneTitle: String!
    edOneDescr: String!
    edTwoTitle: String!
    edTwoDescr: String!
    exOneTitle: String!
    exOneDescr: String!
    skillOne: String!
    skillTwo: String!
    skillThree: String!
  }

  type Opportunities {
    _id: ID!
    oppOneTitle: String!
    oppOneDescr: String!
    oppTwoTitle: String!
    oppTwoDescr: String!
    oppThreeTitle: String!
    oppThreeDescr: String!
  }

  type Query {
    user: [User]
    portfolio(_id: String): [Portfolio]
    opportunities(_id: String): [Opportunities]
  }

  type Mutation {
    createUser(displayName: String!, email: String!, password: String!, description: String!, portfolioLink: String!, opportunitiesLink: String!, linkedin: String!, instagram: String!, facebook: String!, twitter: String!): User
    createOpportunites(_id: String!, oppOneTitle: String!, oppOneDescr: String!, oppTwoTitle: String!, oppTwoDescr: String!, oppThreeTitle: String!, oppThreeDescr: String!): Opportunity
    
  }
`;

module.exports = typeDefs;
