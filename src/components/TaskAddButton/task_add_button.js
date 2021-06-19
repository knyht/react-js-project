// import './task_add_button.css'
import classnames from 'classnames/bind'
import styles from './task_add_button.module.scss'

const cx = classnames.bind(styles)

const TaskAddButton = ({ handleClickAdd, project_id }) => {
    return (
      <button value={project_id} className={cx('task_add_button')} onClick={handleClickAdd}>Добавить задачу</button>
    )
  }

export default TaskAddButton;
