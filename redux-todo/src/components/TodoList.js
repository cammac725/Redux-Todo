import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleCompleted } from '../actions';

class TodoList extends Component {
  state = {
    todo: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addTodo = () => {
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: ''
    })
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>

        {this.props.todos.map((todo, id) => (
          <div
            onClick={() => this.props.toggleCompleted(id)}
            key={id}
            className='todo'
          >
            <p>{todo.title}</p><i class="far fa-times-circle" />
          </div>
        ))}

        <input
          type='text'
          name='todo'
          value={this.state.todo}
          placeholder='New todo'
          onChange={this.handleChange}
        />
        <button onClick={this.addTodo}>Click to add</button>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { addTodo, toggleCompleted })(TodoList);

