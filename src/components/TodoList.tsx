import Todo from "../types/Todo"
import TodoItem from "./TodoItem/TodoItem"

interface TodoListProps {
  todos: Todo[]
}

const TodoList = (props: TodoListProps) => {
  const { todos } = props;

  const todoSort = (todo1: Todo, todo2: Todo) => {
    if (todo1.enabled) {
      if (todo2.enabled) {
        return 0;
      } else {
        return 1;
      }
    } else {
      if (todo2.enabled) {
        return -1;
      } else {
        return 0;
      }
    }
  }

  return (
    <ul>
      {
        [...todos]
          .sort(todoSort)
          .map(todo => <TodoItem key={todo.id} todo={todo} />)
      }
    </ul>
  )
  return 
}
export default TodoList