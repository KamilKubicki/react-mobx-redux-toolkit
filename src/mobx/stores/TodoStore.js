import { observable, action, computed, makeObservable } from 'mobx'

let nextTodoId = 0

class TodoStore {
    @observable todos = [];
    constructor() {
        makeObservable(this)
    }
    @action addTodo (text= 'DUMMY TODO') {
        this.todos.push({id: nextTodoId++ , text, completed: false});
    }

    @action toggleTodo (todo) {
        todo.completed = !todo.completed
    }

    @computed get uncompletedTodosCount() {
        return this.todos.filter(todo => !todo.completed).length;
    }
}

export default TodoStore;