import React, { Component } from 'react';
import { List, Typography  } from 'antd'
import Todo from "../components/Todo"
import {inject, observer} from "mobx-react";
import TodosUncompleted from "../../common/TodosUncompleted";

@inject('store')
@observer
class TodoList extends Component {
    render() {
        const {store} = this.props;
        return (
            <>


            <List
                header={<TodosUncompleted count={store.uncompletedTodosCount}/>}
                bordered
                dataSource={store.todos}
                renderItem={todo =>
                    <Todo key={todo.id} {...todo} onClick={() => store.toggleTodo(todo)} />
                }
            />
            </>
        );
    }
};

export default TodoList;