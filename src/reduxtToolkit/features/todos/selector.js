import { createSelector } from '@reduxjs/toolkit'

const getTodos = state => state.todos

export const getUncompletedTodosCount = createSelector(
    [getTodos],
    todos => (
        todos.reduce((count, todo) =>
                !todo.completed ? count + 1 : count,
            0
        )
    )
)