import React, { Component } from 'react'

export default class ClassClick extends Component {
  
  handleClick() {

    console.log('clicou')


  }
  
    render() {

    return (
      <div>

        <button onClick={this.handleClick}>Clique</button>
      </div>
    )
  }
}
