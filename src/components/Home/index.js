import React, { Component } from 'react'
import Button from '../shared/button'


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
        <h1>Home</h1>
        <Button color="red" onClick={this.handleClick}>{this.state.username}</Button>
    </div>
    )
  }
}
