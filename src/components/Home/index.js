import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'

export default class Home extends Component {
    state = {
        username: ''
    }

    componentDidMount() {
      const username = "Bobo"
      this.setState({username})
    }

    handleClick = () => {
        this.setState({username: 'Alice'})
    }
    
  render() {
    return (
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
    )
  }
}
