import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompleted } from '../../Redux/tasksSlice';

export const Task = ({ task }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
  dispatch(deleteTask(task.id));
  console.log(`Task with id ${task.id} deleted`);
  };  
  
  const handleToggle = () => {
    dispatch(toggleTaskCompleted(task.id));
    
  };
  return (
    <div className={css.wrapper}>
      <input
        onChange={handleToggle}
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
