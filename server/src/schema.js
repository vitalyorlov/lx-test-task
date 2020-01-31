const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        name: String
        email: String
        status: String
    }

    type Query {
        allUsers: [User!]!
    }

    type Mutation {
        addUser(name: String!, email: String!, status: String!): User!
        removeUser(id: ID!): User!
    }
`;

module.exports = typeDefs;
