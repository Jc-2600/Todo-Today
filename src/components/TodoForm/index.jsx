import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../../context/TodoContext";

export function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) =>{
    event.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }


  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  const onCancel = () => {
    setOpenModal(false);
  }
  return (
    <form onSubmit={onSubmit}>
      <span className="close-modal" onClick={onCancel}>
        X
      </span>
      <label>Escribe tu nuevo tarea</label>
      <textarea placeholder="Se lo más descriptivo posible" value={newTodoValue} onChange={onChange}></textarea>
      <div className="TodoForm-buttonContainer">
        <button type="button" className="TodoForm-button--cancel" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}
