import React from 'react'

export default class PopContent extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props.title)
  }

  render(){
    return(
      <div>
        <span>{this.props.title}</span>
      </div>
    )
  }
}
