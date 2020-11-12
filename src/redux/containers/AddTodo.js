import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todo'
import { Form, Button, Input } from 'antd'
import { TagOutlined } from '@ant-design/icons'

const AddTodo = ({addTodo}) => {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log(`Redux - add Todo: `, values.todo)
        addTodo(values.todo);
        form.resetFields();
    };

    return (
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
    )
}

const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodo(todo))
});

export default connect(
    null,
    mapDispatchToProps,
)(AddTodo);