import { useState } from "react";
import styles from "./NewTodo.module.css"
import { addTodo } from "../../features/todo/todoSlice"
import { useDispatch } from 'react-redux'
import Todo from "../../types/Todo";
import { PiCheckBold, PiXBold } from 'react-icons/pi'

const NewTodo = () => {
  const dispatch = useDispatch()
  const [visibleField, setVisibleField] = useState(false)
  const [label, setLabel] = useState('')

  const addField = () => {
    setVisibleField(true)
  }

  const changeLabel = (e: React.FormEvent<HTMLInputElement>) => {
    setLabel(e.currentTarget.value)
  }

  const cancel = () => {
    setVisibleField(false)
  }

  const submit = () => {
    console.log(label)
    if (label) {
      const todo: Todo = JSON.parse(JSON.stringify(new Todo(label)))
      dispatch(addTodo(todo))
    }
    cancel()
    setLabel('')
  }

  return visibleField ?
    (
      <form className={styles.form} onSubmit={submit}>
        <input type="text" value={label} onChange={changeLabel} placeholder="Ajouter un élément" autoFocus></input>
        <PiCheckBold className={`${styles.icon} ${styles.check}`} onClick={submit} title="Ajouter" />
        <PiXBold className={`${styles.icon} ${styles.x}`} onClick={cancel} title="Annuler" />
      </form>
    ) :
    (<input type="button" value="Ajouter un élément" onClick={addField} />)
}

export default NewTodo;