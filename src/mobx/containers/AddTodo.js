import React, { Component } from 'react';
import { inject } from 'mobx-react';
import { Form, Button, Input } from 'antd'
import { TagOutlined } from '@ant-design/icons'

@inject('store')
class AddTodo extends Component {
    formRef = React.createRef();

    onFinish = values => {
        console.log(`Mobx - add Todo: `, values.todo)
        this.props.store.addTodo(values.todo);
        this.formRef.current.resetFields();
    };

    render() {
        return (
            <Form ref={this.formRef} name="horizontal_login" layout="inline" onFinish={this.onFinish} style={{ marginBottom: 20 }} >
                <Form.Item name="todo" style={{ width: '70%', marginRight: 0 }} >
                    <Input prefix={<TagOutlined />} placeholder="Todo" />
                </Form.Item>
                <Form.Item  style={{ width: '30%', marginRight: 0 }} >
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Add Todo
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default AddTodo;