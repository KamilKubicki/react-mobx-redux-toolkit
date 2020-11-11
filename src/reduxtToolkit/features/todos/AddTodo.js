import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Input } from 'antd'
import { TagOutlined } from '@ant-design/icons'

import { addTodo } from './todosSlice'
const mapDispatch = { addTodo }

const AddTodo = ({addTodo}) => {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log(`ReduxToolkit - add Todo: `, values.todo)
        addTodo(values.todo);
        form.resetFields();
    };

    return (
        <div>
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish} style={{ marginBottom: 20 }} >
                <Form.Item name="todo" style={{ width: '70%', marginRight: 0 }} >
                    <Input prefix={<TagOutlined />} placeholder="Todo" />
                </Form.Item>
                <Form.Item  style={{ width: '30%', marginRight: 0 }} >
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Add Todo
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default connect(
    null,
    mapDispatch
)(AddTodo);