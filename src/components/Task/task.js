import TaskButton from '../TaskButton/task_button';
import classnames from 'classnames/bind'
import styles from './task.module.scss'
import { ThemeContext } from '../MyTodoList/theme_context';
// import './task.css'

const cx = classnames.bind(styles)

// { 'task-completed': completed }

const Task = ({ id, name, description, completed, handleClickCompleted, theme }) => { // Рисует одну задачу
    name = 'Задача: ' + name
    description = 'Описание: ' + description
    completed = 'Статус: ' + completed
    return (
      <ThemeContext.Consumer>
        {(theme) => <div className={cx('task', `task-theme-${theme}`)}>
          <div>{name}</div>
          <div>{description}</div>
          <div>{completed}</div>
          {/* <input type='checkbox' /> */}
          <div className={cx('button')}>
            <TaskButton task_id={id} task_completed={completed} handleClickCompleted={handleClickCompleted} />
          </div>
        </div>}
      </ThemeContext.Consumer>
    )
  }

export default Task;
