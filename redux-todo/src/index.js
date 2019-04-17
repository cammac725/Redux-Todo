import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import TodoList from './components/TodoList';
import './index.css';


const store = createStore(reducer);


class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />

      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

