import React from 'react'
import { Popover, Form, Tooltip, Icon } from 'antd'
import PopContent from './popcontent'
const FormItem = Form.Item;

class Pop extends React.Component{

    static propTypes ={
      name:React.PropTypes.string.isRequired,
      content:React.PropTypes.element,
      input:React.PropTypes.element,
      tips:React.PropTypes.string,
      title: React.PropTypes.string
    }

    render (){
      const formItemLayout = {
  			labelCol: { span: 10 },
  			wrapperCol: { span: 12 },
  		};

        const content = <PopContent title={this.props.title}/>

        return <Form horizontal>
        <FormItem
        {...formItemLayout}
        label={(
          <span>
          {this.props.name}
          <Tooltip title={this.props.tips}>
               <Icon type="question-circle-o" />
             </Tooltip>
          </span>
        )}
        >
         <Popover placement="right" content={content} trigger="click">
           {this.props.input}
        </Popover>
        </FormItem>
        </Form>
    }
}

export default Pop
