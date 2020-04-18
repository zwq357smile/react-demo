import React, { Component } from 'react'

class Page3 extends Component {
  state = {
    msg: 'page3'
  }
  render() {
    return (
      <div>{this.state.msg}</div>
    )
  }
}


export default Page3
