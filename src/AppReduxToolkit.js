import React, { Component } from 'react'
import { Provider } from 'react-redux'
import StateManagementCard from "./common/StateManagementCard"
//Store
import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './reduxtToolkit/features/todos/todosSlice'
//Features
import { AddTodo }  from './reduxtToolkit'
import { TodoList }from './reduxtToolkit/features/todos'

class AppReduxToolkit extends Component {
    constructor(props) {
        super(props)
        this.store = configureStore({
            reducer: {
                todos: todosReducer
            }
        })
    }

    render() {
        return (
            <Provider store={this.store}>
                <StateManagementCard title="Redux Toolkit">
                    <AddTodo />
                    <TodoList />
                </StateManagementCard>
            </Provider>
        )
    }
}

export default AppReduxToolkit;
