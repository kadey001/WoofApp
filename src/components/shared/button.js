import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <button onClick={this.props.onClick} style={{background: this.props.color}}>{this.props.children}</button>
    )
  }
}
