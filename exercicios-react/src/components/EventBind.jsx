import React, { Component } from 'react'

export default class EventBind extends Component {

    constructor(){
        super()

        this.state = {
        message: 'hello'
        }

        //this.byeBye = this.byeBye.bind(this)
    }

    /* byeBye(){

       this.setState({message:'Goodbye'})
       console.log(this)
     }     */

     clickHandler = () => {
        this.setState({
            message: 'Bye'
        })
     }
    
  render() {

    return (
      <div>
        <div>{this.state.message}</div>
        {/*<button onClick={this.byeBye.bind(this)}>Clique aqui</button>*/}
        {/*button onClick={() => this.byeBye()}>Clique aqui</button>*/}
        <button onClick={this.clickHandler}>Clique aqui</button>        
      </div>
    )
  }
}
