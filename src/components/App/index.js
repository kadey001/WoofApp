import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import Home from '../Home';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Account from '../Account';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
    <Router>
        <div>
            <Navigation />

            <hr />

            <Route path={ROUTES.HOME} component={Home} exact/>
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.SIGN_IN} component={SignIn} />
            <Route path={ROUTES.ACCOUNT} component={Account} />
        </div>
    </Router>
);

export default withAuthentication(App);