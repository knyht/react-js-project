import classnames from 'classnames/bind'
import styles from './task_add_button.module.scss'
import { connect } from 'react-redux'
import { fetchClickTaskAddUpload } from '../../actions/tasks_projects'

const cx = classnames.bind(styles)

const mapDispatchToProps = (dispatch) => ({
  dispatchOnFetchClickTaskUpload: (project_id) => dispatch(fetchClickTaskAddUpload(project_id))
})

const TaskAddButtonComponent = ({ dispatchOnFetchClickTaskUpload, project_id }) => {
  const onFetchClickTaskUpload = (event) => {
    dispatchOnFetchClickTaskUpload(event.target.value)
  }

  return (
    <button value={project_id} className={cx('task_add_button')} onClick={onFetchClickTaskUpload}>Добавить задачу</button>
  )
}

export const TaskAddButton = connect(null, mapDispatchToProps)(TaskAddButtonComponent);
