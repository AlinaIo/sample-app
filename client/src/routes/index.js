import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../components/Login';
import Home from '../components/App';
import GenerateData from '../components/GenerateData';
import GetAggregateTime from '../components/GetAggregateTime';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/generate' exact component={GenerateData} />
            <Route path='/time' exact component={GetAggregateTime} />
        </Switch>
    </BrowserRouter>
);