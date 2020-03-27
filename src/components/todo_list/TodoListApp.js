import React, { Component } from 'react';
import TodoListTemplate from './TodoListTemplate';
import Form from './Form';
import TodoItemList from './TodoItemList';
import Palette from './Palette';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class TodoListApp extends Component {
  id = 3

  state = {
    input: '',
    todos: [
      {id: 0, text: '리액트소개', checked: false, color: '#12b886'},
      {id: 1, text: '리액트소개', checked: true, color: '#12b886'},
      {id: 2, text: '리액트소개', checked: false, color: '#12b886'},
    ],
    color: '#343a40'
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const {input, todos, color} = this.state;
    this.setState({
      input:'',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color: color
      })
    });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = id => {
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = id => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleSelectColor = (color) => {
    this.setState({
      color: color
    });
  }

  render() {
    const {input, todos, color} = this.state;
    const {handleChange, handleCreate, handleKeyPress, handleToggle, handleRemove, handleSelectColor} = this;

    return (
      <TodoListTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
          color={color}
        />
      )}
      palette={(
        <Palette colors={colors} selected={color} onSelect={handleSelectColor}/>
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default TodoListApp;
