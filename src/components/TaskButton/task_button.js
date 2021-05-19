// import './task_button.css'
import classnames from 'classnames/bind'
import styles from './task_button.module.scss'

const cx = classnames.bind(styles)

const TaskButton = ({ task_id, task_completed, handleClickCompleted }) => { // Кнопка для статуса задачи
    return (
      <button value={task_id} className={cx('button_completed',)} onClick={handleClickCompleted}>Выполнена</button>
    )
  }

export default TaskButton;
