import React, { Component } from 'react'
import { Provider } from 'react-redux'
import StateManagementCard from "./common/StateManagementCard"
//Store
import {createStore} from 'redux'
import rootReducer from "./redux/reducers"
//Components
import { AddTodo } from './redux'
import TodoList from './redux/containers/TodoList'

class AppRedux extends Component {
    constructor(props) {
        super(props)
        this.store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    }

    render() {
        return (
            <Provider store={this.store}>
                <StateManagementCard title="Redux">
                    <AddTodo />
                    <TodoList />
                </StateManagementCard>
            </Provider>
        )
    }
}

export default AppRedux;
