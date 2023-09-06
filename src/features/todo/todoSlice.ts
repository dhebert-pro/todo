import { createSlice } from '@reduxjs/toolkit'
import Todo from '../../types/Todo'

export interface TodoState {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: JSON.parse(JSON.stringify([
    new Todo("Faire un truc"),
    new Todo("Faire un autre truc"),
    new Todo("Arrêter de faire des trucs")
  ])),
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.enabled = !todo.enabled
      }
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleTodo, addTodo } = todoSlice.actions

export default todoSlice.reducer