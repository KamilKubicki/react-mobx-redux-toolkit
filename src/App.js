import React from 'react';

// import Footer from './redux/components/Footer'
import { AddTodo as AddTodoRedux }  from './redux'
import { AddTodo as AddTodoReduxToolkit }  from './reduxtToolkit'
import TodoList from './redux/containers/TodoList'
import { TodoList as TodoListReduxToolkit }from './reduxtToolkit/features/todos'

import { AddTodo as AddTodoMobx } from './mobx/components/AddTodo'

import { Row, Col, Button, Card } from 'antd';

//AntD integration
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import StateManagementCard from "./common/StateManagementCard";

const App = () => (
    <div>
        <Row gutter={16}>
            <Col span={8}>
                <StateManagementCard title="Mobx">
                    {/*<AddTodoMobx />*/}
                </StateManagementCard>
            </Col>
            <Col span={8}>
                <StateManagementCard title="Redux">
                    <AddTodoRedux />
                    <TodoList />
                    {/*<Footer />*/}
                </StateManagementCard>
            </Col>
            <Col span={8}>
                <StateManagementCard title="Redux Toolkit">
                    <AddTodoReduxToolkit />
                    <TodoListReduxToolkit />
                </StateManagementCard>
            </Col>
        </Row>
    </div>
)

export default App;
