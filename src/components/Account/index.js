import React, { Component } from 'react';
import {withFirebase} from '../Firebase/context';

import { withAuthorization, AuthUserContext } from '../Session';

class Account extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount () {
        //let uid = this.props.firebase.getUID();
        let uid = this.props.firebase.getRandomUser();
        this.props.firebase.getUserByID(uid).then((doc) => {
            this.setState({account:doc.data()})
        })
    }

    render () {
        if(this.state.account) {
            //console.log(this.state.account);
            return <container>
                    <div>{this.state.account.email}</div>
                    <div>{this.state.account.username}</div>
                </container>
        }
        return <div>Hi</div>
    }
}
    // <AuthUserContext.Consumer>
    //     {authUser => (
    //         <div>
    //             <h1>Account: {authUser.email}</h1>
    //             <h2>Username: {authUser.username}</h2>
    //         </div>
    //     )}  
    // </AuthUserContext.Consumer>



const condition = authUser => !!authUser;

export default withFirebase(withAuthorization(condition)(Account));