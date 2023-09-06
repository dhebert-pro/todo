import { useState } from "react";
import styles from "./NewTodo.module.css"
import { addTodo } from "../../features/todo/todoSlice"
import { useDispatch } from 'react-redux'
import Todo from "../../types/Todo";

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
    const todo: Todo = JSON.parse(JSON.stringify(new Todo(label)))
    dispatch(addTodo(todo))
    cancel()
    setLabel('')
  }

  return visibleField ?
    (
      <div className={styles.form}>
        <input type="text" value={label} onChange={changeLabel} placeholder="Ajouter un élément" autoFocus></input>
        <input type="button" value="Valider" onClick={submit} />
        <input type="button" value="Annuler" onClick={cancel} />
      </div>
    ) :
    (<input type="button" value="Ajouter un élément" onClick={addField} />)
}

export default NewTodo;