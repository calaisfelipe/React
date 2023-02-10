import React, { Component } from 'react'
import ChieldComponent from './ChieldComponent'

export default class ParentComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            parentName: 'José'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(name){
        alert(`hello ${this.state.parentName}`)
        console.log(name)

    }

  render() {
    return (
      <div>
        <ChieldComponent action={this.greetParent} />

      </div>
    )
  }
}
