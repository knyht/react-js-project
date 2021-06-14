import classnames from 'classnames/bind'
import styles from './project_add_button.module.scss'
import { connect } from 'react-redux'
import { fetchClickProjectAddUpload } from '../../actions/tasks_projects'

const cx = classnames.bind(styles)

const mapDispatchToProps = (dispatch) => ({
    dispatchOnFetchClickProjectUpload: () => dispatch(fetchClickProjectAddUpload())
})

const ProjectAddButtonComponent = ({ dispatchOnFetchClickProjectUpload }) => {
    const onFetchClickProjectUpload = () => {
        dispatchOnFetchClickProjectUpload()
    }

    return (
        <div>
            <button className={cx('project_add_button')} onClick={onFetchClickProjectUpload}>+</button>
        </div>
    )
}

export const ProjectAddButton = connect(null, mapDispatchToProps)(ProjectAddButtonComponent);
