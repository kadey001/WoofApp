import React from 'react'
import { withAuthorization } from '../Session';

import { Button, Icon } from 'semantic-ui-react'

const Home = () => (
        <div>
        <h1 align="center">Home</h1>
        <body>
        <img src= {require("./test_images/dog2.jpeg")} width="40%" height="40%" alt="Dog" class='center'></img>
        </body>
        <Button icon size="massive">
          <Icon name="paw icon"></Icon>
        </Button>
        <Button icon size="massive">
          <Icon name="close icon"></Icon>
        </Button>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);