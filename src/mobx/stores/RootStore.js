import TodoStore from "./TodoStore";

class RootStore {
    constructor() {
        this.todoStore = new TodoStore(this);
    }
}

export default new RootStore();