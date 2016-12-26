import React from 'react'
import { Link } from 'react-router'
import 'antd/dist/antd.min.css'

export default React.createClass({
    render() {
        return (
            <div>
                <h1> React Router Tutorial </h1>
                <ul role = "nav">
                    <li>
                        <Link to="/app"> App </Link>
                    </li>
                    <li>
                        <Link to="/buttonexample"> ButtonExample </Link>
                    </li>
                    <li>
                        <Link to="/slidernum"> SliderNum </Link>
                    </li>
                    <li>
                        <Link to="/popitem"> PopItem </Link>
                    </li>
                    <li>
                        <Link to="/todobox"> TodoBox </Link>
                    </li>
                    <li>
                        <Link to="/zoomlevel"> ZoomLevel </Link>
                    </li>
                    <li>
                        <Link to="/rumble"> Rumble </Link>
                    </li>
                    <li>
                        <Link to="/navigationcontrol"> NavigationControl </Link>
                    </li>
                    <li>
                        <Link to="/autobind"> Autobind </Link>
                    </li>
                </ul>
            </div>
        )
    }
})
