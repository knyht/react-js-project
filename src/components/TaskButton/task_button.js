import './task_button.css'

const TaskButton = ({ task_id, task_completed, handleClickCompleted }) => { // Кнопка для статуса задачи
    return (
      <button value={task_id} className='button_completed' onClick={handleClickCompleted}>Выполнена</button>
    )
  }

export default TaskButton;
