import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import AddUserForm from "../components/add-user-form";

const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!, $status: String!) {
    addUser(name: $name, email: $email, status: $status) {
      id,
      name,
      email,
      status
    }
  }
`;

const GET_ALL_USERS = gql`
  query GetAllUsers {
    allUsers {
      id,
      name,
      email,
      status
    }
  }
`;

export default function AddUser() {
  const [addUser, { loading, error }] = useMutation(
    ADD_USER,
    {
      update(cache, { data: { addUser } }) {
        const { allUsers } = cache.readQuery({ query: GET_ALL_USERS }) as any;
        cache.writeQuery({
          query: GET_ALL_USERS,
          data: { allUsers: allUsers.concat(addUser) },
        });
      }
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

  return <AddUserForm addUser={addUser} />;
}
