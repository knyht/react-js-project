// import './task_completed_button.css'
import classnames from 'classnames/bind'
import styles from './task_completed_button.module.scss'

const cx = classnames.bind(styles)

const TaskCompletedButton = ({ task_id, handleClickCompleted }) => { // Кнопка для статуса задачи
    return (
      <button value={task_id} className={cx('task_completed_button',)} onClick={handleClickCompleted}>Выполнена</button>
    )
  }

export default TaskCompletedButton;
