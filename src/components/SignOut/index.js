import React from 'react';

import { withFirebase } from '../Firebase';

import { Button } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'

const SignOutButton = ({ firebase }) => (
    <Button icon labelPosition= 'left' basic color='red' onClick={firebase.doSignOut}>
        <Icon name='log out'></Icon>
        Log Out
    </Button>
);

export default withFirebase(SignOutButton);