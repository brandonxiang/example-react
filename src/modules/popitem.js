import React from 'react'
import Pop from './pop'

export default class PopItem extends React.Component{
  render(){
    const content = (<div>
      <span>Hello</span>
    </div>)

    const input = (
      <input type="text"/>
    )

    return <Pop
       name={"testPopName"}
       tips={"tips"}
       content={content}
       input={input}
    ></Pop>
  }
}
