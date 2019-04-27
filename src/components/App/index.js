import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import Home from '../Home'
import SignIn from '../SignIn'

import * as ROUTES from '../../constants/routes'

const App = () => (
    <Router>
        <div>
            <Navigation />

            <hr />

            <Route path={ROUTES.SIGN_IN} component={SignIn} />
            <Route path={ROUTES.HOME} component={Home} />
        </div>
    </Router>
);

export default App;