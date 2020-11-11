import { combineReducers } from 'redux'
import todosReducer from '../features/todos/todosSlice'

export default combineReducers({
    todos: todosReducer
})
