import React from 'react';
import { Route } from 'react-router';

import Au2 from './modules/Au2';
import profile from './modules/profile';
import Registration from './modules/registration';
import LoginForm from './modules/login';
import my_cars from './modules/my_cars';

export default (
    <Route path="/" component={Au2}>
        <Route path="/profile" component={profile} />
        <Route path="/login" component={LoginForm} />
        <Route path="/registration" component={Registration} />
        <Route path="/myCars" component={my_cars} />
    </Route>
)