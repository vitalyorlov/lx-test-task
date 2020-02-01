import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import {EuiButtonIcon} from '@elastic/eui';
import {REMOVE_USER} from "../schema";

interface RemoveUserProps {
    id: string
}

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

export default function RemoveUser(props: RemoveUserProps) {
    const [removeUser, {loading, error}] = useMutation(
        REMOVE_USER,
        {
            update(cache, {data: {removeUser}}) {
                const {allUsers} = cache.readQuery({query: GET_ALL_USERS}) as any;
                cache.writeQuery({
                    query: GET_ALL_USERS,
                    data: {allUsers: allUsers.filter(({id}: any) => id !== removeUser.id)},
                });
            }
        }
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>An error occurred</p>;

    return <EuiButtonIcon color="danger"
                          iconType="trash"
                          onClick={() => removeUser({variables: {id: props.id}})}/>;
}
