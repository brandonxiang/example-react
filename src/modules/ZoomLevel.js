import React from 'react'
import ReactDOM from 'react-dom'
import SliderNum from './SliderNum'
import {Row, Col,Button} from 'antd'
import _ from 'lodash'


export default class ZoomLevel extends React.Component{
   state =  {
      data: [
        {"id": "0001", "zoom":7, "value": 0.25},
        {"id": "0002", "zoom":20, "value": 30},
      ]
    }

  handleTaskDelete(taskId) {
    var data = this.state.data;
    data = data.filter(function(task) {
      return task.id !== taskId;
    });
    this.setState({data});
  }


  handleToggleComplete(taksId) {
    var data = this.state.data;
    for(var i in data) {
      if (data[i].id === taksId) {
        data[i].complete = data[i].complete === "true" ? "false" : "true";
        break;
      }
    }
    this.setState({data});
  }

  sortByZoom(data){
    return  _.sortBy(data, function(item) {
      return item.zoom;
    });

  }


  generateId() {
    return Math.floor(Math.random() * 9000) + 1000;
  }


  handleSubmit() {
    var data = this.state.data;
    var id = this.generateId();

    data = data.concat([{"id": id, "zoom": data[0].zoom+1, "value": data[0].value}]);
    data = this.sortByZoom(data);
    this.setState({data});

  }

  render() {


    return (
      <div>
        <StopList data={this.state.data}
          deleteTask={this.handleTaskDelete.bind(this)}
          toggleComplete={this.handleToggleComplete.bind(this)}
          />
        <NewBtn submitTask={this.handleSubmit.bind(this)} />
      </div>
    )
  }
}

class StopList extends React.Component{
  render() {
    var taskList = this.props.data.map(function(listItem) {
      return (
        <StopItem
          taskId={listItem.id}
          key={listItem.id}
          zoom={listItem.zoom}
          value={listItem.value}
          deleteTask={this.props.deleteTask}
          toggleComplete={this.props.toggleComplete} />
      )
    }, this);

    return (
        <ul>
          {taskList}
        </ul>
    )
  }
}

class StopItem extends React.Component{
  toggleComplete() {
    this.props.toggleComplete(this.props.taskId);
  }

  deleteTask() {
    this.props.deleteTask(this.props.taskId);
  }

  handleMouseOver() {
    ReactDOM.findDOMNode(this.refs.deleteBtn).style.display = "inline";
  }

  handleMouseOut() {
    ReactDOM.findDOMNode(this.refs.deleteBtn).style.display = "none";
  }

  render() {
    return (
      <li>
      <Row>
        <Col span={10}>
        <SliderNum value={this.props.zoom} min={1} max={22} step={1}/>
        </Col>
        <Col span={10}>
        <SliderNum value={this.props.value} step={1}/>
        </Col>
        <Col span={4}>
          <Button type="primary" onClick={this.deleteTask.bind(this)} icon="delete" ref="deleteBtn">删除</Button>
        </Col>
        </Row>
      </li>
    );
  }
}

class NewBtn extends React.Component{
  submitTask(e) {
    e.preventDefault();
    this.props.submitTask();
  }

  render() {
    return (
      <Button
       type = "primary"
       icon = "plus"
       onClick={this.submitTask.bind(this)}
       >Add Stop</Button>
    )
  }
}
