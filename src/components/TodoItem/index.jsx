import './TodoItem.css'
import { Circle } from '../Circle';
import { DeletedIcon } from '../DeletedIcon';
import {Checked} from '../Checked'

function TodoItem({ text, completed, onComplete, deleteTodo }) {
  return (
    <li>
      <div className="content-item">
        <span
          onClick={
            onComplete
          }
        >{completed ? <Checked/> : <Circle/> }</span>
        {
        completed 
          ? <p className="TodoItem-p--complete">{text}</p> 
          : <p className="Todo-content">{text}</p>
        }
        <span 
          onClick={deleteTodo}
          className="delete-icon"><DeletedIcon/></span>
      </div>
    </li>
  );
}

export { TodoItem }