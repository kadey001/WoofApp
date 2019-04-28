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
        this.props.firebase.getUserByID(this.props.firebase.getUID()).then((doc) => {
            this.setState({account:doc.data()})
        })
    }

    render () {
        console.log(this.props.firebase)
        if(this.state.account) {
            console.log(this.state.account);
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