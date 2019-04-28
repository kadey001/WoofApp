import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import Home from '../Home'
import SignIn from '../SignIn'
import SignUp from '../SignUp'

import * as ROUTES from '../../constants/routes'
//import { withAuthentication } from '../Session';

const App = () => (
    <Router>
        <div>
            <Navigation />

            <hr />

            <Route path={ROUTES.HOME} component={Home} exact/>
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.SIGN_IN} component={SignIn} />
        </div>
    </Router>
);

export default App;