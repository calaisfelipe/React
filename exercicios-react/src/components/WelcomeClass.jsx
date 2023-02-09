import React, {Component} from "react";


export default class WelcomeClass extends Component {

    constructor(){
        super()
    

    }

    render(){

        const {name, lastname} = this.props
        return( 
        <div>
            <h1>Welcome {name} {lastname}</h1>

        </div>

    )}
}

 