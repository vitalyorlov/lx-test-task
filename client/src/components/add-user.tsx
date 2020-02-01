import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import AddUserForm from "./add-user-form";
import {ADD_USER, GET_ALL_USERS} from "../schema";

export default function AddUser() {
    const [addUser, {loading, error}] = useMutation(
        ADD_USER,
        {
            update(cache, {data: {addUser}}) {
                const {allUsers} = cache.readQuery({query: GET_ALL_USERS}) as { allUsers: any };
                cache.writeQuery({
                    query: GET_ALL_USERS,
                    data: {allUsers: allUsers.concat(addUser)},
                });
            }
        }
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>An error occurred</p>;

    return <AddUserForm addUser={addUser}/>;
}
