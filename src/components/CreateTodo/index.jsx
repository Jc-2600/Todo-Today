import './CreateTodo.css'

function CreateTodo({setOpenModal}) {
  return (
    <button className="button-create" 
      onClick={
        setOpenModal
      }>+
    </button>
  );
}

export { CreateTodo }