import React, {Fragment} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {RouteComponentProps} from '@reach/router';
import AddUser from "../components/add-user";
import UsersTable from "../components/users-table";
import styled from "react-emotion";
import {GET_ALL_USERS} from "../schema";

interface UsersProps extends RouteComponentProps {}

const Users: React.FC<UsersProps> = () => {
    const {
        data,
        loading,
        error
    } = useQuery(GET_ALL_USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Oops.. something went wrong</p>;
    if (!data) return <p>Not found</p>;

    return (
        <Fragment>
            <Header>Users list</Header>
            {data.allUsers && <UsersTable users={data.allUsers}/>}
            <Header>Add new user</Header>
            <AddUser/>
        </Fragment>
    );
};

const Header = styled('h1')({
    padding: '2rem 0',
});

export default Users;

