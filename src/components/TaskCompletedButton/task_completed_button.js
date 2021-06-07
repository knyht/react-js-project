// import './task_completed_button.css'
import classnames from 'classnames/bind'
import styles from './task_completed_button.module.scss'
import { connect } from 'react-redux'
import { handleClickTaskCompleted } from '../../actions/tasks_projects'

const cx = classnames.bind(styles)

const mapDispatchToProps = (dispatch) => ({
  dispatchOnClickTaskCompleted: (task_id) => dispatch(handleClickTaskCompleted(task_id))
})

const TaskCompletedButtonComponent = ({ task_id, dispatchOnClickTaskCompleted }) => {
  const onClickTaskCompleted = (event) => {
    dispatchOnClickTaskCompleted(event.target.value)
  }

    return (
      <button value={task_id} className={cx('task_completed_button',)} onClick={onClickTaskCompleted}>Выполнена</button>
    )
  }

export const TaskCompletedButton = connect(mapDispatchToProps)(TaskCompletedButtonComponent);
