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
    },
    removeTodo: (state, action) => {
      const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload)
      if (todoIndex !== -1) {
        state.todos.splice(todoIndex, 1)
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleTodo, addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer