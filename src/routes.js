import React from 'react';
import { Route } from 'react-router';

import Au2 from './modules/Au2';
import Profile from './modules/profile';
import Registration from './modules/registration';
import Login from './modules/login';
import MyCars from './modules/my_cars';

export default (
    <Route path="/" component={Au2}>
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/myCars" component={MyCars} />
    </Route>
)