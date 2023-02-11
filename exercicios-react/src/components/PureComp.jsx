import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log('######## PuRE COMP RENDER ########')
    return (
      <div>PureComp {this.props.name}

      </div>
    )
  }
}

export default PureComp