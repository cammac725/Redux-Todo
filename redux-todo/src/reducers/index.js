// reducer

import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from '../actions';

const initialState = {
  todos: [
    {
      title: 'Learn UI',
      completed: true,
      id: 1
    },
    {
      title: 'Start Backend',
      completed: false,
      id: 2
    },
    {
      title: 'Learn Redux',
      completed: false,
      id: 3
    }
  ]
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
            completed: false
          }
        ]
      }

    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.payload) {
            return { ...todo, completed: !todo.completed }
          }
          return todo;
        })
      }

    case DELETE_TODO:
      return {
        ...state,

      }

    default:
      return state
  }
}

export default reducer;