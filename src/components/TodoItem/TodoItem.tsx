import { toggleTodo, removeTodo } from "../../features/todo/todoSlice"
import Todo from "../../types/Todo"
import styles from "./TodoItem.module.css"
import { useDispatch } from 'react-redux'
import { PiXBold } from 'react-icons/pi'

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

  const remove = () => {
    dispatch(removeTodo(todo.id))
  }

  return (
    <li className={styles.list}>
      <div className={styles.item}>
        <input type="checkbox" checked={checked} onChange={toggle} className={styles.checkbox}></input>
        <span className={styles[labelClassName]}>{todo.label}</span>
      </div>
      <PiXBold className={`${styles.icon} ${styles.x}`} title={`Supprimer "${todo.label}"`} onClick={remove}/>
    </li>
  )
}

export default TodoItem