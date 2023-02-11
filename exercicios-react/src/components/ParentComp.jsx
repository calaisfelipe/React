import React, { Component, PureComponent } from 'react'
//import RegularComp from './RegularComp'
//import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Felipe'
      }
    }

    componentDidMount(){
        setInterval(() => { 
            this.setState({
                name: 'Felipe'
            })
        }, 2000)
    }


  render() {
    console.log('****Parent com render*****')
    return (
      <div>ParentComp
        {/*<RegularComp name={this.state.name}/>
        <PureComp name={this.state.name}/>*/}
        <MemoComp name={this.setState.name}/>

      </div>
    )
  }
}

export default ParentComp