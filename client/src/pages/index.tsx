import React, {Fragment} from 'react';
import {Router} from '@reach/router';

import Users from './users';
import PageContainer from '../components/page-container';

export default function Pages() {
    return (
        <Fragment>
            <PageContainer>
                <Router primary={false} component={Fragment}>
                    <Users path="/"/>
                </Router>
            </PageContainer>
        </Fragment>
    );
}
