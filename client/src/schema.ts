import gql from "graphql-tag";

export const GET_ALL_USERS = gql`
    query GetAllUsers {
        allUsers {
            id,
            name,
            email,
            status
        }
    }
`;

export const ADD_USER = gql`
    mutation AddUser($name: String!, $email: String!, $status: String!) {
        addUser(name: $name, email: $email, status: $status) {
            id,
            name,
            email,
            status
        }
    }
`;

export const REMOVE_USER = gql`
    mutation RemoveUser($id: ID!) {
        removeUser(id: $id) {
            id
        }
    }
`;
