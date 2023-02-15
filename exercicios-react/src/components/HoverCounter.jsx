import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class HoverCounter extends Component {
    

  render() {
    const {count, incrementCount,name} = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount}>{name} Hovered {count} times </h2>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter,20)