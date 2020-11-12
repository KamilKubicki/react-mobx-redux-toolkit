import React, { Component } from 'react'
import {Provider} from 'mobx-react'
import StateManagementCard from "./common/StateManagementCard"
//Store
import rootStore from "./mobx/stores/RootStore";
//Components
import AddTodo from './mobx/containers/AddTodo'
import TodoList from './mobx/containers/TodoList'

class AppMobx extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider
                rootStore={rootStore}
                store={rootStore.todoStore}
            >
                <StateManagementCard title="Mobx" count={rootStore.todoStore.uncompletedTodosCount}>
                    <AddTodo />
                    <TodoList />
                </StateManagementCard>
            </Provider>
        )
    }
}

export default AppMobx;
