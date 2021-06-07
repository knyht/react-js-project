// import './task_add_button.css'
import classnames from 'classnames/bind'
import styles from './task_add_button.module.scss'
import { connect } from 'react-redux'
import { handleClickTaskAdd } from '../../actions/tasks_projects'

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  theme: state.theme.theme
})

const mapDispatchToProps = (dispatch) => ({
  dispatchOnClickTaskAdd: (project_id) => dispatch(handleClickTaskAdd(project_id))
})

const TaskAddButtonComponent = ({ theme, dispatchOnClickTaskAdd, project_id }) => {
  const onClickTaskAdd = (event) => {
    dispatchOnClickTaskAdd(event.target.value)
  }

  return (
    <button value={project_id} className={cx('task_add_button')} onClick={onClickTaskAdd}>Добавить задачу</button>
  )
}

export const TaskAddButton = connect(mapStateToProps, mapDispatchToProps)(TaskAddButtonComponent);
