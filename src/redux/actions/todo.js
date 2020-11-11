import * as types from '../constants/ActionTypes';

let nextTodoId = 0

export const addTodo = text => ({
    type: types.ADD_TODO,
    id: nextTodoId++,
    text
})

export const toggleTodo = id => ({
    type: types.TOGGLE_TODO,
    id
})