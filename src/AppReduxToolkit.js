import React, { Component } from 'react'
import { Provider } from 'react-redux'
import StateManagementCard from "./common/StateManagementCard"
//Store
import { configureStore } from '@reduxjs/toolkit'
import rootReduxToolkitReducer from './reduxtToolkit/reducers'
//Features
import { TodoList as TodoListReduxToolkit }from './reduxtToolkit/features/todos'
import { AddTodo as AddTodoReduxToolkit }  from './reduxtToolkit'

class AppReduxToolkit extends Component {
    constructor(props) {
        super(props)
        this.store = configureStore({
            reducer: rootReduxToolkitReducer
        })
    }

    render() {
        return (
            <Provider store={this.store}>
                <StateManagementCard title="Redux Toolkit">
                    <AddTodoReduxToolkit />
                    <TodoListReduxToolkit />
                </StateManagementCard>
            </Provider>
        )
    }
}

export default AppReduxToolkit;
