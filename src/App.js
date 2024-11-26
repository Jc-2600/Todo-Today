import "./App.css";
import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "./context/TodoContext";

// const defaultTodos = [
//   {
//     text: 'Crear database en Notion',
//     completed: false
//   },
//   {
//     text: 'Crear el archivo de conexión con Notion',
//     completed: true
//   },
//   {
//     text: 'Cargar los la información de tareas en Notion',
//     completed: false
//   }
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1');

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
