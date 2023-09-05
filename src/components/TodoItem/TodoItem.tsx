import { toggleTodo } from "../../features/todo/todoSlice"
import Todo from "../../types/Todo"
import styles from "./TodoItem.module.css"
import { useDispatch } from 'react-redux'

interface TodoItemProps {
  todo: Todo
}

const TodoItem = (props: TodoItemProps) => {
  const dispatch = useDispatch()
  const { todo } = props;
  const checked = todo.enabled
  const labelClassName = checked ? "checked" : ""

  const toggle = () => {
    dispatch(toggleTodo(todo.id))
  }

  return (
    <li className={styles.item}>
      <input type="checkbox" checked={checked} onChange={toggle} className={styles.checkbox}></input>
      <span className={styles[labelClassName]}>{todo.label}</span>
    </li>
  )
}

export default TodoItem