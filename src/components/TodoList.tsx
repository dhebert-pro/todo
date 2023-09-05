import Todo from "../types/Todo"
import TodoItem from "./TodoItem/TodoItem"

interface TodoListProps {
  todos: Todo[]
}

const TodoList = (props: TodoListProps) => {
  const { todos } = props;
  return (
    <ul>
      {
        todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
      }
    </ul>
  )
  return 
}
export default TodoList