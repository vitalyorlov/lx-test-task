import React from 'react';

import {EuiBasicTable, EuiHealth} from '@elastic/eui';
import RemoveUser from "../pages/remove-user";

export default function UsersTable(props: { users: [] }) {
    const columns = [
        {
            field: 'id',
            name: 'ID',
            sortable: true,
            mobileOptions: {
                header: false,
                truncateText: false,
                enlarge: true,
                fullWidth: true,
            },
        },
        {
            field: 'name',
            name: 'Name',
            truncateText: true,
        },
        {
            field: 'email',
            name: 'Email',
            truncateText: true,
        },
        {
            field: 'status',
            name: 'Status',
            dataType: 'boolean',
            render: (status: any) => {
                const color = status === 'Active' ? 'success' : status === 'Blocked' ? 'danger' : 'warning';
                return <EuiHealth color={color}>{status}</EuiHealth>;
            },
        },
        {
            field: 'id',
            name: 'Actions',
            truncateText: true,
            render: (id: string) => {
                return <RemoveUser id={id}/>;
            },
        },
    ];

    return (
        <EuiBasicTable
            items={props.users}
            columns={columns}
        />
    );
};
