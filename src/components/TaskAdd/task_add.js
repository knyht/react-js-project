import TaskAddButton from '../TaskAddButton/task_add_button'
// import './task_add.css'
import classnames from 'classnames/bind'
import styles from './task_add.module.scss'
import { ThemeContext } from '../MyTodoList/theme_context'

const cx = classnames.bind(styles)

const TaskAdd = ( {name, description, handleChange, handleClickAdd, project_id} ) => { // Добавление новой задачи
    return (
      <div className={cx('task_add')}>
        <ThemeContext.Consumer>
          {(theme) => (<div className={cx('inputs')}>
            <div>
              <input className={cx('input', `input-theme-${theme}`)} value={name} onChange={handleChange} placeholder='Название задачи' name='name' />
            </div>
            <div>
              <input className={cx('input', `input-theme-${theme}`)} value={description} onChange={handleChange} placeholder='Описание задачи' name='description' />
            </div>
          </div>)}
        </ThemeContext.Consumer>
          <TaskAddButton handleClickAdd={handleClickAdd} project_id={project_id} />
      </div>
    )
  }

  export default TaskAdd;
