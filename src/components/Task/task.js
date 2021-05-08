import TaskButton from '../TaskButton/task_button';
import './task.css'

const Task = ({ id, name, description, completed, handleClickCompleted }) => { // Рисует одну задачу
    name = 'Задача: ' + name
    description = 'Описание: ' + description
    completed = 'Статус: ' + completed
    return (
      <div className='task'>
        <div>{name}</div>
        <div>{description}</div>
        <div>{completed}</div>
        <TaskButton task_id={id} task_completed={completed} handleClickCompleted={handleClickCompleted} />
      </div>
    )
  }

export default Task;
