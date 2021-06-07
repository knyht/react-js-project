import { TaskCompletedButton } from '../TaskCompletedButton/task_completed_button';
import classnames from 'classnames/bind'
import styles from './task.module.scss'
// import { ThemeContext } from '../MyTodoList/theme_context';
// import './task.css'
import { connect } from 'react-redux'

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  theme: state.theme.theme
})

const TaskComponent = ({ id, name, description, completed, theme }) => {
  const name_full = 'Задача: ' + name
  const description_full = 'Описание: ' + description
  const completed_full = 'Статус: ' + completed
  return (
      // <ThemeContext.Consumer>
      //   {(theme) => <div className={cx('task', `task-theme-${theme}`, { [`task-theme-${theme}-completed`]: completed })}>
      //     <div>{name_full}</div>
      //     <div>{description_full}</div>
      //     <div>{completed_full}</div>
      //     {/* <input type='checkbox' /> */}
      //     <div className={cx('button')}>
      //       <TaskCompletedButton task_id={id} task_completed={completed_full} handleClickCompleted={handleClickCompleted} />
      //     </div>
      //   </div>}
      // </ThemeContext.Consumer>
    <div className={cx('task', `task-theme-${theme}`, { [`task-theme-${theme}-completed`]: completed })}>
          <div>{name_full}</div>
          <div>{description_full}</div>
          <div>{completed_full}</div>
          {/* <input type='checkbox' /> */}
          <div className={cx('button')}>
            <TaskCompletedButton task_id={id} task_completed={completed_full} />
          </div>
    </div>
  )
}

export const Task = connect(mapStateToProps)(TaskComponent);
