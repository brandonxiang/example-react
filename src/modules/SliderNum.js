import React from 'react'
import { Slider, InputNumber, Row, Col } from 'antd';

const SliderNum = React.createClass({
  getInitialState() {
    return {
      inputValue: 1,
    };
  },
  onChange(value) {
    this.setState({
      inputValue: value,
    });
  },
  render() {
    return (
      <Row>
        <Col span={12}>
          <Slider min={1} max={20} onChange={this.onChange} value={this.state.inputValue} />
        </Col>
        <Col span={4}>
          <InputNumber min={1} max={20} style={{ marginLeft: '16px' }}
            value={this.state.inputValue} onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  },
});

export default SliderNum;