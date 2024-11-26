import React from "react";
import { useLocalStorage } from "../../customHooks/useLocalStorage";
import confetti from "canvas-confetti";

export const TodoContext = React.createContext();

export function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    error,
    loading,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const todoSearched = searchValue.toLocaleLowerCase();
    return todoText.includes(todoSearched);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    if (newTodos[todoIndex].completed) confetti();
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      text,
      completed: false
    })
    saveTodos(newTodos);
  }

  const deletTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  };

  const openingModal = () => {
    setOpenModal(state => !state)
  }

  return (
    <TodoContext.Provider
      value={{
        completeTodo,
        totalTodos,
        searchedTodos,
        searchValue,
        deletTodo,
        completedTodos,
        setSearchValue,
        loading,
        error,
        openingModal,
        setOpenModal,
        openModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
