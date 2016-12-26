import React, { Component } from 'react'
import autobind from 'autobind-decorator'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }

    onClick() {
        var num = this.state.num + 1
        this.setState({ num: num })
    }

    render() {
        return (<button onClick = { this.onClick.bind(this)}>Test:{this.state.num}</button>)
    }
}

export default Button
