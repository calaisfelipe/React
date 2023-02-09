import React, { Component } from 'react'

export default class CounterClass extends Component {

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    handleCounter(){

        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
    }

    incrementFive(){
        this.handleCounter()
        this.handleCounter()
        this.handleCounter()
        this.handleCounter()
        this.handleCounter()

    }


  render() {
    return (
      <div>CounterClass - {this.state.count}
        <button onClick={() => this.incrementFive()}>Click Here</button>
      </div>
    )
  }
}
