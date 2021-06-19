import classnames from 'classnames/bind'
import styles from './task_completed_button.module.scss'
import { connect } from 'react-redux'
import { fetchClickTaskCompletedUpload } from '../../actions/tasks_projects'

const cx = classnames.bind(styles)

const mapDispatchToProps = (dispatch) => ({
  dispatchOnFetchClickTaskCompletedUpload: (completed) => dispatch(fetchClickTaskCompletedUpload(completed))
})

const TaskCompletedButtonComponent = ({ project_id, task_id, dispatchOnFetchClickTaskCompletedUpload }) => {
  const onFetchClickTaskCompletedUpload = (event) => {
    dispatchOnFetchClickTaskCompletedUpload(event.target)
  }

  return (
    <button data-project-id={project_id} data-task-id={task_id} className={cx('task_completed_button')} onClick={onFetchClickTaskCompletedUpload}>Выполнена</button>
  )
}

export const TaskCompletedButton = connect(null, mapDispatchToProps)(TaskCompletedButtonComponent);
