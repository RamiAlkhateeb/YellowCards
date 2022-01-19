import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { List } from './List';
import { AddEdit } from './AddEdit';
import { ViewProfile} from './ViewProfile'
import { UserInfo } from './UserInfo'

function Users({ match }) {
    const { path } = match;
    
    return (
        <Switch>
            <Route exact path={path} component={List} />
            <Route path={`${path}/add`} component={AddEdit} />
            <Route path={`${path}/edit/:id`} component={AddEdit} />
            <Route path={`${path}/info/:id`} component={UserInfo} />
            <Route path={`${path}/profile/:id`} component={ViewProfile} />


        </Switch>
    );
}

export { Users };