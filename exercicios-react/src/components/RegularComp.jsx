import React, { Component } from 'react'

export default class RegularComp extends Component {
  render() {
    console.log('$$$$$$$ REGULAR COMP RENDER$$$$$$$')
    return (
      <div>RegularComp {this.props.name}

      </div>
    )
  }
}
