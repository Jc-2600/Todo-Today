import "./TodoCounter.css"
import { Fade } from "react-awesome-reveal";
import React from "react";
import { TodoContext } from "../../context/TodoContext";


function TodoCounter(){

    const {totalTodos: total, completedTodos: completed} = React.useContext(TodoContext)

    return(
        <Fade>
            <div className="container-counter">
                <div className="row-content">
                    <h2 className="couter-title">
                        Tareas creadas <span className="Todo-completed">{total}</span>
                    </h2>
                </div>
                <div className="row-content">
                    <h2 className="couter-title">
                    Concluidas <span className="Todo-completed">{completed} de {total}</span>
                </h2>
                </div>
            </div>
        </Fade>
    );
}

export {TodoCounter}