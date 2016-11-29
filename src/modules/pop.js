import React from 'react'
import { Popover, Form } from 'antd'
const FormItem = Form.Item;

class Pop extends React.Component{

    static propTypes ={
    }



    render (){
        const formItemLayout = {
			labelCol: { span: 10 },
			wrapperCol: { span: 12 },
		};

        return <Form horizontal>
        <FormItem
        {...formItemLayout}
        label={this.props.name}
        >
         <Popover placement="right" content={this.props.content} trigger="click">
           {this.props.input}
        </Popover>
        </FormItem>
        </Form>
    }
}

export default Pop
