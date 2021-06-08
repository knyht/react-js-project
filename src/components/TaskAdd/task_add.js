import { TaskAddButton } from '../TaskAddButton/task_add_button'
import classnames from 'classnames/bind'
import styles from './task_add.module.scss'
import { connect } from 'react-redux'
import { handleInputChange } from '../../actions/tasks_projects'

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  task_name: state.tasks_projects.task_name,
  task_description: state.tasks_projects.task_description,
  theme: state.theme.theme
})

const mapDispatchToProps = (dispatch) => ({
  dispatchOnInputChange: (input) => dispatch(handleInputChange(input))
})

const TaskAddComponent = ({ task_name, task_description, theme, dispatchOnInputChange, project_id }) => {
  const onInputChange = (event) => {
    dispatchOnInputChange(event.target)
  }

  return (
    <div className={cx('task_add')}>
      <div className={cx('inputs')}>
          <div>
            <input className={cx('input', `input-theme-${theme}`)} value={task_name} onChange={onInputChange} placeholder='Название задачи' name='task_name' />
          </div>
          <div>
            <input className={cx('input', `input-theme-${theme}`)} value={task_description} onChange={onInputChange} placeholder='Описание задачи' name='task_description' />
          </div>
        </div>
        <TaskAddButton project_id={project_id} />
    </div>
  )
}

export const TaskAdd = connect(mapStateToProps, mapDispatchToProps)(TaskAddComponent);
