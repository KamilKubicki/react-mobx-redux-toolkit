import React, { Component } from 'react';
import { observer,inject} from 'mobx-react';

@inject('store')
@observer
class AddTodo extends Component {
    state = {
        inputValue: ''
    }

    handleChange = (e) => {
        const inputValue = e.target.value;
        this.setState({
            inputValue
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let inputValue = this.state.inputValue.trim();
        if(inputValue) {
            this.props.todoList.createTodo(inputValue);
            this.setState({
                inputValue: ''
            });
        } else {
            alert(123);
        }
    }

    render() {
        return
            <form onSubmit={this.handleSubmit}>
                <input  type="text" value={this.state.inputValue} placeholder="xxx" onChange={this.handleChange}/>
                <button type="submit">xxx</button>
            </form>
    }
}
export { AddTodo }