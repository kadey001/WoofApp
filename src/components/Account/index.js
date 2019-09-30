import React, { Component } from 'react';
import {withFirebase} from '../Firebase/context';

import { withAuthorization, AuthUserContext } from '../Session';

class Account extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount () {
        this.props.firebase.getUserByID().then((doc) => {
            this.setState({account:doc.data()})
        })
    }

    render () {
        if(this.state.account) {
            return <container>
                    <div>Account: {this.state.account.email}</div>
                    <div>Username: {this.state.account.username}</div>
                </container>
        }
        return <div>Hi</div>
    }
}

const condition = authUser => !!authUser;

export default withFirebase(withAuthorization(condition)(Account));