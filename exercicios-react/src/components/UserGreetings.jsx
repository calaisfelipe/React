import React, { Component } from 'react'


export default class UserGreetings extends Component {
    constructor(props){
        super(props)

        this.state = {
            isLoggedIn: false
        }

        this.logIn = this.logIn.bind(this)
    }

    logIn(){
        
        if(this.state.isLoggedIn){
            this.setState({isLoggedIn: false})
        }else{
            this.setState({isLoggedIn: true})
        }
        
    }

  render() {

    return (

      <div>
        {this.state.isLoggedIn ? <p>Welcome vishwas</p> : <p>welcome guest</p>}

        <button onClick={this.logIn}>LogIn</button>
        
      </div>
    )
  }
}
