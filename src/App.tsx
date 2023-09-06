import { useSelector } from 'react-redux';
import './App.css'
import TodoList from './components/TodoList'
import Todo from './types/Todo'
import { RootState } from './app/store';
import NewTodo from './components/NewTodo/NewTodo';

function App() {

  const todos: Todo[] = useSelector((state: RootState) => state.todo.todos)

  const nbChecked = todos.filter(todo => todo.enabled).length;

  return (
    <>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
      <NewTodo />
      <p>
        Nombre d'éléments cochés = {nbChecked}
      </p>
    </>
  )
}

export default App
