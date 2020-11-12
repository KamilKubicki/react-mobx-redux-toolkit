import { createSelector } from 'reselect'

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