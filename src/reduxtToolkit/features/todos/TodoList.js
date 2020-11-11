import React from 'react';
import { connect } from 'react-redux';
import { List  } from 'antd'
import { toggleTodo } from './todosSlice'
import Todo from "../../components/Todo"

const TodoList = ({ todos, toggleTodo }) => {
    return (
        <List
            bordered
            dataSource={todos}
            renderItem={todo =>
                <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
            }
        />
    );
};

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);