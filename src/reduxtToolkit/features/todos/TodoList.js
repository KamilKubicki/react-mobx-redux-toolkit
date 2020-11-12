import React from 'react';
import { connect } from 'react-redux';
import { List  } from 'antd'
import { toggleTodo } from './todosSlice'
import Todo from "../../components/Todo"
import { getUncompletedTodosCount } from "./selector";
import TodosUncompleted from "../../../common/TodosUncompleted";

const TodoList = ({ todos, toggleTodo, uncompletedTodosCount }) => {
    return (
        <List
            bordered
            header={<TodosUncompleted count={uncompletedTodosCount}/>}
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