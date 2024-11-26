import "./TodoList.css"

function TodoList(props){
    return(
        <ul className="lista-Todos">
            {props.children}
        </ul>
    );
}

export {TodoList}