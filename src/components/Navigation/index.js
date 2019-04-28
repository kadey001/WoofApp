import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

import { List, Container } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';


const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth />}
        </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = () => (
    <ul>
        <List horizontal>
                <List.Item>
                    <Image src= {require("./Pictures/title.png")} alt="Title" size= "small" centered/>
                </List.Item>
                <List.Item>
                    <Link to={ROUTES.HOME}>
                        <Button icon labelPosition= 'left' inverted color= 'pink'>
                            <Icon name='home icon'></Icon>Home
                        </Button>
                    </Link>           
                </List.Item>
            {/* <List.Item>
            <Link to={ROUTES.ACCOUNT}>
                <Button icon labelPosition= 'left' inverted color='purple'>
                    <Icon name='user icon'></Icon>Account
                </Button>
                </Link>
            </List.Item> */}
            <List.Item>
                <SignOutButton />
            </List.Item>
        </List>
            <Image src= {require("./Pictures/Soulwoof.png")} alt="Title" size= "tiny" floated='right'/>


    </ul>
);

const NavigationNonAuth = () => (
    
    <List horizontal>
        <List.Item>
            <Image src= {require("./Pictures/title.png")} alt="Title" size= "small" centered/>
        </List.Item>
        <List.Item>
            <Link to={ROUTES.SIGN_IN}>
            <Button icon labelPosition= 'left' inverted color='blue'>
                <Icon name='sign in icon'></Icon>
                Sign in
            </Button>
            </Link>
        </List.Item>
        <List.Item>
            <Link to={ROUTES.SIGN_UP}>
            <Button icon labelPosition= 'left' inverted color='teal'>
                <Icon name='signup icon'></Icon>
                Sign Up
                </Button>
                </Link>
        </List.Item>
    </List>
);

export default Navigation;