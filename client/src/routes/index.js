import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../components/Login';
import Home from '../components/App';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
        </Switch>
    </BrowserRouter>
);