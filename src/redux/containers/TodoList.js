import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todo'
import { List  } from 'antd'
import Todo from "../components/Todo"
import {getUncompletedTodosCount} from "../selectors";
import TodosUncompleted from "../../common/TodosUncompleted";

const TodoList = ({ todos, toggleTodo, uncompletedTodosCount }) => {
    return (
        <List
            header={<TodosUncompleted count={uncompletedTodosCount}/>}
            bordered
            dataSource={todos}
            renderItem={todo =>
                <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
            }
        />
    );
};

const mapStateToProps = (state) => ({
    todos: state.todos,
    uncompletedTodosCount: getUncompletedTodosCount(state)
});

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);