import React, { Component } from 'react'

export default class RefsExample extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
     
    }

    HandleClick = () => {
        alert(this.inputRef.current.value)
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

  render() {
    return (
      <div>RefsExample
        <input type="text" name="itext" id="itext"  ref={this.inputRef}/>

        <button onClick={this.HandleClick}>Click</button>
      </div>
    )
  }
}
