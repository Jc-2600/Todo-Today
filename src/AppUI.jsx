import React from "react";
import { TodoCounter } from "./components/TodoCounter/";
import { TodoItem } from "./components/TodoItem/";
import { TodoList } from "./components/TodoList/";
import { TodoSearch } from "./components/TodoSearch/";
import { CreateTodo } from "./components/CreateTodo/";
import { TodoTitle } from "./components/TodoTitle/";
import { TodosLoading } from "./components/TodosLoading/";
import { TodosError } from "./components/TodosError/";
import { TodosEmpty } from "./components/TodosEmpty/";
import { Fade } from "react-awesome-reveal";
import { TodoContext } from "./context/TodoContext";
import { Modal } from "./components/Modal";
import { TodoForm } from "./components/TodoForm";

export function AppUI() {
  const {
    completeTodo,
    searchedTodos,
    deletTodo,
    loading,
    error,
    openingModal,
    openModal,
    } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <Fade>
        <TodoTitle />
        <div className="app-container">
          <TodoSearch />
          <TodoCounter />
          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {!loading && searchedTodos.length === 0 && !error && <TodosEmpty />}
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                deleteTodo={() => deletTodo(todo.text)}
              />
            ))}
          </TodoList>
          <CreateTodo setOpenModal={openingModal} />
          {openModal && (
            <Modal>
              <TodoForm/>
            </Modal>
          )}
        </div>
      </Fade>
    </React.Fragment>
  );
}
