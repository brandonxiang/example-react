import React from 'react'
import Pop from './pop'

export default class PopItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: "Hello Brandon"
    }
  }

  render(){

    const input = (
      <input type="text"/>
    )

    return <Pop
       name={"testPopName"}
       tips={"tips"}
       input={input}
       title={this.state.name}
    ></Pop>
  }
}
