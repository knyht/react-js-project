import AddButton from '../AddButton/add_button'
// import './task_input.css'
import classnames from 'classnames/bind'
import styles from './task_input.module.scss'
import { ThemeContext } from '../MyTodoList/theme_context'

const cx = classnames.bind(styles)

const TaskInput = ( {name, description, handleChange, handleClickAdd} ) => { // Инпуты для добавления новой задачи
    return (
      <div className={cx('task_input_add')}>
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
          <AddButton handleClickAdd={handleClickAdd}/>
      </div>
    )
  }

  export default TaskInput;
