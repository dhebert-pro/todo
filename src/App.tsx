import { useSelector } from 'react-redux';
import './App.css'
import TodoList from './components/TodoList'
import Todo from './types/Todo'
import { RootState } from './app/store';

function App() {

  const todos: Todo[] = useSelector((state: RootState) => state.todo.todos)

  const nbChecked = todos.filter(todo => todo.enabled).length;

  return (
    <>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
      <p>
        Nombre d'éléments cochés = {nbChecked}
      </p>
    </>
  )
}

export default App
