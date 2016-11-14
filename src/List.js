import React, { Component } from 'react'
import App from './App.js'
import { ChromePicker } from 'react-color'
import ButtonExample from './ButtonExample'

class List extends Component {
    render() {
        return ( < div >
            < App title = "Hello World" / >
            < ChromePicker / >
            < ButtonExample / >
            < /div>
        )
    }
}

export default List;