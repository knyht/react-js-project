import classnames from 'classnames/bind'
import styles from './project_add_button.module.scss'
import { connect } from 'react-redux'
import { handleClickProjectAdd } from '../../actions/tasks_projects'

const cx = classnames.bind(styles)

const mapDispatchToProps = (dispatch) => ({
    dispatchOnClickProjectAdd: (event) => dispatch(handleClickProjectAdd(event))
})

const ProjectAddButtonComponent = ({ dispatchOnClickProjectAdd }) => {
    const onClickProjectAdd = (event) => {
        dispatchOnClickProjectAdd(event.target)
    }

    return (
        <div>
            <button className={cx('project_add_button')} onClick={onClickProjectAdd}>+</button>
        </div>
    )
}

export const ProjectAddButton = connect(null, mapDispatchToProps)(ProjectAddButtonComponent);
